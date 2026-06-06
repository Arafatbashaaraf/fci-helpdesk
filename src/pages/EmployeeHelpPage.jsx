import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import HelpArticleFigure from '../components/HelpArticleFigure';
import HelpArticleLines from '../components/HelpArticleLines';
import { useSmoothScroll } from '../components/SmoothScrollProvider';
import { HELP_KB, slugify } from '../data/helpKb';

export default function EmployeeHelpPage() {
  const { groupSlug, categorySlug, articleSlug } = useParams();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll() ?? {};
  const [openCategory, setOpenCategory] = useState(null);
  const [guideNavOpen, setGuideNavOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState(() => new Set());
  const [expandedCategories, setExpandedCategories] = useState(() => new Set());

  const groups = Object.keys(HELP_KB);

  const groupFromSlug = groups.find((group) => slugify(group) === groupSlug) ?? groups[0];
  const categories = Object.keys(HELP_KB[groupFromSlug] ?? {});
  const categoryFromSlug =
    categories.find((category) => slugify(category) === categorySlug) ?? categories[0];

  const articles = HELP_KB[groupFromSlug]?.[categoryFromSlug] ?? [];
  const articleFromSlug =
    articles.find((article) => slugify(article.title) === articleSlug) ?? articles[0];

  const expectedPath = `/docs/employee-help/${slugify(groupFromSlug)}/${slugify(categoryFromSlug)}/${slugify(articleFromSlug?.title ?? '')}`;
  if (!groupSlug || !categorySlug || !articleSlug || expectedPath !== `/docs/employee-help/${groupSlug}/${categorySlug}/${articleSlug}`) {
    return <Navigate to={expectedPath} replace />;
  }

  useEffect(() => {
    if (scrollTo) {
      scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [articleFromSlug.title, scrollTo]);

  useEffect(() => {
    setExpandedGroups((prev) => new Set([...prev, groupFromSlug]));
    setExpandedCategories((prev) =>
      new Set([...prev, `${slugify(groupFromSlug)}/${slugify(categoryFromSlug)}`]),
    );
    setOpenCategory(categoryFromSlug);
  }, [groupFromSlug, categoryFromSlug]);

  const toggleGroup = (group) => {
    const isOpen = expandedGroups.has(group);
    if (isOpen) {
      setExpandedGroups((prev) => {
        const next = new Set(prev);
        next.delete(group);
        return next;
      });
      return;
    }

    setExpandedGroups((prev) => new Set([...prev, group]));
    if (group !== groupFromSlug) {
      const firstCategory = Object.keys(HELP_KB[group] ?? {})[0];
      const firstArticle = HELP_KB[group]?.[firstCategory]?.[0];
      if (firstCategory && firstArticle) {
        navigate(
          `/docs/employee-help/${slugify(group)}/${slugify(firstCategory)}/${slugify(firstArticle.title)}`,
        );
      }
    }
  };

  const toggleCategory = (group, categoryName, categoryArticles) => {
    const categoryKey = `${slugify(group)}/${slugify(categoryName)}`;
    const isOpen = expandedCategories.has(categoryKey);

    if (isOpen) {
      setExpandedCategories((prev) => {
        const next = new Set(prev);
        next.delete(categoryKey);
        return next;
      });
      return;
    }

    setExpandedCategories((prev) => new Set([...prev, categoryKey]));
    const firstArticle = categoryArticles[0];
    if (firstArticle && (group !== groupFromSlug || categoryName !== categoryFromSlug)) {
      navigate(
        `/docs/employee-help/${slugify(group)}/${slugify(categoryName)}/${slugify(firstArticle.title)}`,
      );
    }
  };

  return (
    <div className="grid w-full items-start gap-5 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-6">
      <div className="employee-help-sidebar z-30 w-full shrink-0">
        <button
          type="button"
          onClick={() => setGuideNavOpen((open) => !open)}
          className="fci-glass mb-1 flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 lg:hidden"
          aria-expanded={guideNavOpen}
        >
          <span>Guide menu</span>
          <span aria-hidden>{guideNavOpen ? '−' : '+'}</span>
        </button>
        <aside
          className={`fci-glass flex min-h-0 flex-col overflow-hidden lg:max-h-[calc(100vh-5.25rem)] ${guideNavOpen ? 'flex' : 'hidden'} lg:flex`}
        >
        <h2 className="fci-glass-header shrink-0 px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm">
          FCI User Guide
        </h2>
        <ul
          data-lenis-prevent
          className="employee-help-menu-list"
        >
          {Object.keys(HELP_KB).map((group) => {
            const isGroupOpen = expandedGroups.has(group);

            return (
            <li key={group} className="border-b border-sky-500/10 last:border-b-0">
              <button
                type="button"
                onClick={() => toggleGroup(group)}
                aria-expanded={isGroupOpen}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-base font-medium transition sm:px-4 sm:text-lg ${
                  groupFromSlug === group
                    ? 'bg-sky-500/15 text-slate-900 dark:text-white'
                    : 'text-slate-600 hover:bg-sky-500/10 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="shrink-0 text-sm">📁</span>
                  <span className="truncate">{group}</span>
                </span>
                <span className="shrink-0 text-lg">{isGroupOpen ? '−' : '+'}</span>
              </button>

              {isGroupOpen && (
                <ul className="space-y-1.5 px-2 pb-3 pt-1 sm:px-3">
                  {Object.entries(HELP_KB[group]).map(([categoryName, categoryArticles]) => {
                    const categoryKey = `${slugify(group)}/${slugify(categoryName)}`;
                    const isCategoryOpen = expandedCategories.has(categoryKey);

                    return (
                    <li key={categoryName}>
                      <button
                        type="button"
                        onClick={() => toggleCategory(group, categoryName, categoryArticles)}
                        aria-expanded={isCategoryOpen}
                        className={`flex w-full items-center justify-between gap-2 break-words rounded px-2 py-1 text-left text-sm font-medium sm:text-base ${
                          categoryFromSlug === categoryName && groupFromSlug === group
                            ? 'bg-sky-500/15 text-slate-900 dark:text-white'
                            : 'text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300'
                        }`}
                      >
                        <span>› {categoryName}</span>
                        <span className="shrink-0 text-base">{isCategoryOpen ? '−' : '+'}</span>
                      </button>
                      {isCategoryOpen && (
                      <ul className="mt-1 space-y-1 pl-3 sm:pl-4">
                        {categoryArticles.map((article) => (
                          <li key={article.title}>
                            <Link
                              to={`/docs/employee-help/${slugify(group)}/${slugify(categoryName)}/${slugify(article.title)}`}
                              className={`block break-words rounded px-2 py-1 text-sm leading-6 sm:text-[15px] sm:leading-7 ${
                                articleFromSlug.title === article.title &&
                                categoryFromSlug === categoryName &&
                                groupFromSlug === group
                                  ? 'text-sky-600 dark:text-sky-400'
                                  : 'text-slate-600 hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-300'
                              }`}
                            >
                              › {article.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      )}
                    </li>
                    );
                  })}
                </ul>
              )}
            </li>
            );
          })}
        </ul>
      </aside>
      </div>

      <section className="employee-help-content min-w-0 flex-1">
        <div className="w-full min-w-0">
        <h1 className="border-b border-sky-500/20 pb-3 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {groupFromSlug}
        </h1>

        <div className="mt-6 lg:hidden">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Articles</h2>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory((prev) => (prev === category ? null : category))
                  }
                  className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-lg ${
                    openCategory === category
                      ? 'bg-sky-500/25 text-sky-700 dark:text-sky-300'
                      : 'text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300'
                  }`}
                >
                  <span className="text-sm">📄</span>
                  {category}
                </button>

                {openCategory === category && (
                  <ul className="mt-2 space-y-2 pl-7">
                    {HELP_KB[groupFromSlug][category].map((article) => (
                      <li key={article.title}>
                        <Link
                          to={`/docs/employee-help/${slugify(groupFromSlug)}/${slugify(category)}/${slugify(article.title)}`}
                          className={`text-base leading-7 ${
                            articleFromSlug?.title === article.title
                              ? 'text-sky-600 dark:text-sky-400'
                              : 'text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300'
                          }`}
                        >
                          › {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {articleFromSlug && (
          <article
            id={`article-${slugify(articleFromSlug.title)}`}
            className="fci-glass mt-6 p-4 sm:mt-8 sm:p-6 lg:p-7"
          >
            <h4 className="text-xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-2xl lg:text-3xl">
              {articleFromSlug.title}
            </h4>
            <HelpArticleLines items={articleFromSlug.body} blockKey="body" />
            {articleFromSlug.image && (
              <HelpArticleFigure
                src={articleFromSlug.image}
                alt={articleFromSlug.imageAlt ?? articleFromSlug.title}
              />
            )}
            {articleFromSlug.bodyContinue?.length > 0 && (
              <HelpArticleLines items={articleFromSlug.bodyContinue} blockKey="cont" />
            )}
            {articleFromSlug.image2 &&
              articleFromSlug.title === 'How do I add a new lead?' &&
              articleFromSlug.bodyAfterImage3?.length > 0 &&
              articleFromSlug.bodyEnd?.length > 0 && (
                <HelpArticleFigure
                  src={articleFromSlug.image2}
                  alt={articleFromSlug.image2Alt ?? articleFromSlug.title}
                />
              )}
            {articleFromSlug.title === 'How do I add a new lead?' &&
            articleFromSlug.bodyAfterImage3?.length > 0 &&
            articleFromSlug.bodyEnd?.length > 0 ? (
              <>
                <HelpArticleLines items={articleFromSlug.bodyAfterImage3} blockKey="a3" />
                {articleFromSlug.image3 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image3}
                    alt={articleFromSlug.image3Alt ?? articleFromSlug.title}
                  />
                )}
                <HelpArticleLines items={articleFromSlug.bodyEnd} blockKey="end" />
                {articleFromSlug.image4 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image4}
                    alt={articleFromSlug.image4Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyAfterImage4?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyAfterImage4} blockKey="a4" />
                )}
                {articleFromSlug.image5 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image5}
                    alt={articleFromSlug.image5Alt ?? articleFromSlug.title}
                  />
                )}
              </>
            ) : (
              <>
                {articleFromSlug.image2 &&
                  articleFromSlug.title !== 'How do I add a new lead?' && (
                  <HelpArticleFigure
                    src={articleFromSlug.image2}
                    alt={articleFromSlug.image2Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyEnd?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyEnd} blockKey="end" />
                )}
                {articleFromSlug.image3 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image3}
                    alt={articleFromSlug.image3Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyAfterImage3?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyAfterImage3} blockKey="a3" />
                )}
                {articleFromSlug.image4 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image4}
                    alt={articleFromSlug.image4Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyAfterImage4?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyAfterImage4} blockKey="a4" />
                )}
                {articleFromSlug.image5 &&
                  articleFromSlug.title !== 'How do I add a new lead?' && (
                  <HelpArticleFigure
                    src={articleFromSlug.image5}
                    alt={articleFromSlug.image5Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyAfterImage5?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyAfterImage5} blockKey="a5" />
                )}
                {articleFromSlug.image6 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image6}
                    alt={articleFromSlug.image6Alt ?? articleFromSlug.title}
                  />
                )}
                {articleFromSlug.bodyAfterImage6?.length > 0 && (
                  <HelpArticleLines items={articleFromSlug.bodyAfterImage6} blockKey="a6" />
                )}
                {articleFromSlug.image7 && (
                  <HelpArticleFigure
                    src={articleFromSlug.image7}
                    alt={articleFromSlug.image7Alt ?? articleFromSlug.title}
                  />
                )}
              </>
            )}
          </article>
        )}
        </div>
      </section>
    </div>
  );
}
