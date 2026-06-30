/**
 * Resolve public-folder URLs for both local dev (base `/`) and GitHub Pages (`/fci-helpdesk/`).
 */
export function publicAssetUrl(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const q = path.indexOf('?');
  const pathname = q === -1 ? path : path.slice(0, q);
  const query = q === -1 ? '' : path.slice(q);
  const normalized = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  return `${base}${normalized}${query}`;
}
