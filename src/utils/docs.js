import { helpKbSearchEntries } from '../data/helpKb';

const SEARCH_MIN_CHARS = 2;
const SEARCH_MAX_RESULTS = 10;

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'can',
  'do',
  'for',
  'how',
  'i',
  'in',
  'is',
  'my',
  'of',
  'or',
  'our',
  'the',
  'to',
  'we',
  'what',
  'when',
  'where',
  'you',
]);

/** Normalize text for matching — "log in" becomes "login". */
function normalizeHaystack(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\blog in\b/g, 'login')
    .replace(/\bsign in\b/g, 'login')
    .replace(/\bsign up\b/g, 'signup')
    .replace(/\s+/g, ' ')
    .trim();
}

function queryTokens(query) {
  const tokens = normalizeHaystack(query)
    .split(' ')
    .filter((word) => word.length >= 2 && !STOP_WORDS.has(word));

  if (tokens.length > 0) return tokens;

  const fallback = normalizeHaystack(query).replace(/\s+/g, '');
  return fallback.length >= SEARCH_MIN_CHARS ? [fallback] : [];
}

function tokenMatchesHaystack(token, haystack) {
  if (haystack.includes(token)) return true;
  if (token.length >= 4) {
    const stem = token.slice(0, Math.max(4, token.length - 2));
    if (haystack.includes(stem)) return true;
  }
  return false;
}

function scoreEntry(entry, tokens, fullQuery) {
  const title = normalizeHaystack(entry.title);
  const excerpt = normalizeHaystack(entry.excerpt);
  const group = normalizeHaystack(entry.group);
  const category = normalizeHaystack(entry.category);
  const combined = `${title} ${excerpt} ${group} ${category}`;

  if (fullQuery.length >= SEARCH_MIN_CHARS && combined.includes(fullQuery)) {
    return 20 + (entry.kind === 'article' ? 5 : entry.kind === 'category' ? 3 : 1);
  }

  if (title.includes(fullQuery)) {
    return 18 + (entry.kind === 'article' ? 4 : 2);
  }

  let matched = 0;
  let titleHits = 0;
  let categoryHits = 0;

  for (const token of tokens) {
    if (tokenMatchesHaystack(token, combined)) matched += 1;
    if (tokenMatchesHaystack(token, title)) titleHits += 1;
    if (tokenMatchesHaystack(token, category)) categoryHits += 1;
  }

  if (matched === 0) return 0;

  const ratio = matched / tokens.length;
  let score = ratio * 10;

  if (titleHits === tokens.length) score += 12;
  else if (titleHits > 0) score += titleHits * 4;

  if (categoryHits > 0) score += categoryHits * 2;

  if (entry.kind === 'category' && categoryHits > 0) score += 3;
  if (entry.kind === 'group' && tokenMatchesHaystack(tokens[0] ?? '', group)) score += 2;

  return score;
}

/**
 * Search FCI help articles, categories, and menu sections from HELP_KB.
 */
function searchDocs(query) {
  const normalized = normalizeHaystack(query);
  if (normalized.replace(/\s/g, '').length < SEARCH_MIN_CHARS) return [];

  const tokens = queryTokens(query);
  const fullQuery = normalized.replace(/\s+/g, ' ');

  const scored = [];

  for (const entry of helpKbSearchEntries()) {
    const score = scoreEntry(entry, tokens, fullQuery);
    if (score > 0) {
      scored.push({ ...entry, score });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, SEARCH_MAX_RESULTS)
    .map(({ score: _score, ...rest }) => rest);
}

export { searchDocs };
