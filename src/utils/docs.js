import { helpKbSearchEntries } from '../data/helpKb';

const SEARCH_MIN_CHARS = 2;
const SEARCH_MAX_RESULTS = 6;

/**
 * Search only FCI help articles (Employee / Admin) from HELP_KB.
 */
function searchDocs(query) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < SEARCH_MIN_CHARS) return [];

  const scored = [];

  for (const entry of helpKbSearchEntries()) {
    const scoreTitle = entry.title.toLowerCase().includes(normalized) ? 5 : 0;
    const scoreExcerpt = entry.excerpt.toLowerCase().includes(normalized) ? 3 : 0;
    const score = scoreTitle + scoreExcerpt;
    if (score > 0) {
      scored.push({ ...entry, score });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, SEARCH_MAX_RESULTS)
    .map(({ score: _s, ...rest }) => rest);
}

export { searchDocs };
