import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SiteBackground from '../components/SiteBackground';
import HelpDeskNavbar from '../components/helpdesk/HelpDeskNavbar';
import SearchBar from '../components/SearchBar';

export default function DocsLayout() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDocRoute = location.pathname === '/docs' || location.pathname.startsWith('/docs/');
  const isKbRoute =
    /^\/docs\/employee-help\/[^/]+\/[^/]+\/[^/]+$/.test(location.pathname);
  const isDocsHub = location.pathname === '/docs';
  const kbGroupMatch = location.pathname.match(/^\/docs\/employee-help\/([^/]+)\//);
  const kbGroupSlug = kbGroupMatch?.[1];
  const kbGroupLabel =
    kbGroupSlug === 'admin-help'
      ? 'Admin Help'
      : kbGroupSlug === 'employee-help'
        ? 'Employee Help'
        : null;

  return (
    <div className="relative min-h-screen text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <SiteBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <HelpDeskNavbar />
        {isMobileOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
        )}

        <main className="flex-1 pt-16">
          {isDocRoute && !isDocsHub && !isHome && (
            <>
              <section
                className={`px-3 sm:px-4 ${isKbRoute ? 'pb-4 pt-6' : 'pb-10 pt-10'}`}
              >
                <div className="mx-auto w-full min-w-0 max-w-[1200px]">
                  <h1
                    className={`text-center font-bold text-slate-900 dark:text-white ${
                      isKbRoute ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
                    }`}
                    style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                  >
                    FCI User Guide
                  </h1>
                  {!isKbRoute && (
                    <SearchBar
                      className="mx-auto mt-6 max-w-[760px] sm:mt-8"
                      inputClassName="fci-search-input"
                      resultsClassName="fci-search-results"
                      placeholder={'Search ("/" to focus)'}
                    />
                  )}
                </div>
              </section>
              <section className="border-y border-slate-200 bg-white/70 backdrop-blur-md dark:border-sky-500/15 dark:bg-slate-900/40">
                <div className="mx-auto flex min-w-0 max-w-[1200px] items-center justify-between gap-2 px-3 py-2.5 text-xs text-slate-600 sm:px-4 sm:py-3 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Link to="/" className="text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                      Home
                    </Link>
                    <span className="text-slate-400 dark:text-slate-600">›</span>
                    {kbGroupLabel ? (
                      <span className="text-slate-800 dark:text-slate-200">{kbGroupLabel}</span>
                    ) : (
                      <span className="text-slate-800 dark:text-slate-200">FCI User Guide</span>
                    )}
                  </div>
                  <div>
                    {isKbRoute ? (
                      <span className="text-slate-500">Help center</span>
                    ) : (
                      <span className="text-slate-500">FCI User Guide</span>
                    )}
                  </div>
                </div>
              </section>
            </>
          )}
          {isDocsHub && !isHome && (
            <section className="border-y border-slate-200 bg-white/70 backdrop-blur-md dark:border-sky-500/15 dark:bg-slate-900/40">
              <div className="mx-auto flex min-w-0 max-w-[1200px] items-center justify-between gap-2 px-3 py-2.5 text-xs text-slate-600 sm:px-4 sm:py-3 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Link to="/" className="text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                    Home
                  </Link>
                  <span className="text-slate-400 dark:text-slate-600">›</span>
                  <span className="text-slate-800 dark:text-slate-200">FCI User Guide</span>
                </div>
                <span className="text-slate-500">Browse topics</span>
              </div>
            </section>
          )}
          <div className={isHome ? '' : 'mx-auto max-w-[1200px] px-3 py-5 sm:px-4 sm:py-8'}>
            <Outlet context={{ closeMobileMenu: () => setMobileOpen(false), isMobileOpen }} />
          </div>
        </main>
      </div>
    </div>
  );
}
