import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HELP_KB, buildCategoryArticleTree, slugify } from '../data/helpKb';

/** Mobile / legacy shell: same tree as Employee Help (FCI only). */
export default function Sidebar({ isMobileOpen, onCloseMobile }) {
  const location = useLocation();
  const groups = Object.keys(HELP_KB);
  const [openSections, setOpenSections] = useState(() =>
    Object.fromEntries(groups.map((g) => [g, true]))
  );

  const activePath = location.pathname;

  function toggleSection(groupTitle) {
    setOpenSections((prev) => ({ ...prev, [groupTitle]: !prev[groupTitle] }));
  }

  const defaultFirstArticle = useMemo(() => {
    const map = {};
    for (const group of groups) {
      const cats = Object.keys(HELP_KB[group]);
      const firstCat = cats[0];
      const firstArticle = HELP_KB[group][firstCat][0];
      map[group] = `/docs/employee-help/${slugify(group)}/${slugify(firstCat)}/${slugify(firstArticle.title)}`;
    }
    return map;
  }, [groups]);

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onCloseMobile}
          aria-label="Close sidebar overlay"
        />
      )}

      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 transform border-r border-slate-200 bg-white p-4 transition duration-200 dark:border-slate-800 dark:bg-slate-950 md:sticky md:top-24 md:h-auto md:w-full md:translate-x-0 md:rounded-md md:border md:p-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto md:overflow-visible">
          <p className="rounded-t-md bg-blue-600 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white">
            FCI User Guide
          </p>

          <div className="space-y-0 border border-t-0 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            {groups.map((group) => {
              const isOpen = openSections[group];
              return (
                <div key={group} className="border-b border-slate-200 last:border-0 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => toggleSection(group)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    {group}
                    <span>{isOpen ? '−' : '+'}</span>
                  </button>

                  {isOpen && (
                    <ul className="space-y-1 px-2 pb-2">
                      <li>
                        <Link
                          to={defaultFirstArticle[group]}
                          onClick={onCloseMobile}
                          className="block rounded-md px-2 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
                        >
                          Open {group}
                        </Link>
                      </li>
                      {Object.entries(HELP_KB[group]).map(([categoryName, categoryArticles]) => (
                        <li key={categoryName}>
                          <p className="px-2 py-1 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                            {categoryName}
                          </p>
                          <ul className="space-y-0.5 pl-2">
                            {buildCategoryArticleTree(categoryArticles).map((node) => {
                              if (node.type === 'article') {
                                const to = `/docs/employee-help/${slugify(group)}/${slugify(categoryName)}/${slugify(node.article.title)}`;
                                const isActive = activePath === to;
                                return (
                                  <li key={node.article.title}>
                                    <Link
                                      to={to}
                                      onClick={onCloseMobile}
                                      className={`block rounded-md px-2 py-1.5 text-sm transition ${
                                        isActive
                                          ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                                          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                                      }`}
                                    >
                                      <span className="mr-2 text-amber-400">›</span>
                                      {node.article.title}
                                    </Link>
                                  </li>
                                );
                              }

                              const parentTo = `/docs/employee-help/${slugify(group)}/${slugify(categoryName)}/${slugify(node.article.title)}`;
                              const isParentActive = activePath === parentTo;
                              return (
                                <li key={node.article.title}>
                                  <Link
                                    to={parentTo}
                                    onClick={onCloseMobile}
                                    className={`block rounded-md px-2 py-1.5 text-sm font-medium transition ${
                                      isParentActive
                                        ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                                    }`}
                                  >
                                    <span className="mr-2 text-amber-400">›</span>
                                    {node.article.title}
                                  </Link>
                                  {node.children.length > 0 && (
                                    <ul className="mt-0.5 space-y-0.5 border-l border-slate-200 pl-3 dark:border-slate-700">
                                      {node.children.map((child) => {
                                        const childTo = `/docs/employee-help/${slugify(group)}/${slugify(categoryName)}/${slugify(child.title)}`;
                                        const isChildActive = activePath === childTo;
                                        return (
                                          <li key={child.title}>
                                            <Link
                                              to={childTo}
                                              onClick={onCloseMobile}
                                              className={`block rounded-md px-2 py-1 text-sm transition ${
                                                isChildActive
                                                  ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                                                  : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                              }`}
                                            >
                                              <span className="mr-2 text-amber-400">›</span>
                                              {child.title}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
