import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const EMPLOYEE_HELP = '/docs/employee-help';
const ADMIN_HELP = '/docs/employee-help/admin-help/account/how-do-i-log-in-to-fci';

export default function DocsHubPage() {
  const [searching, setSearching] = useState(false);

  return (
    <div className="space-y-10">
      {!searching && (
        <p className="text-center text-slate-600 dark:text-slate-400">
          Choose Employee Help or Admin Help—the same categories as on the home page.
        </p>
      )}
      <SearchBar
        className="mx-auto max-w-2xl"
        inputClassName="fci-search-input"
        resultsClassName="fci-search-results"
        resultsLayout="inline"
        onActiveChange={setSearching}
      />

      {!searching && (
        <section className="flex justify-center">
          <article className="fci-glass w-full max-w-[360px] overflow-hidden">
            <h2 className="fci-glass-header px-5 py-3 text-base">FCI User Guide</h2>
            <ul>
              <li className="border-b border-sky-500/10 last:border-b-0">
                <Link
                  to={EMPLOYEE_HELP}
                  className="flex w-full items-center justify-between px-5 py-3 text-left text-lg font-medium text-slate-800 transition hover:bg-sky-500/10 dark:text-slate-200"
                >
                  <span className="flex items-center gap-3">
                    <span>📁</span>
                    <span>Employee Help</span>
                  </span>
                  <span className="text-sky-400">+</span>
                </Link>
              </li>
              <li>
                <Link
                  to={ADMIN_HELP}
                  className="flex w-full items-center justify-between px-5 py-3 text-left text-lg font-medium text-slate-800 transition hover:bg-sky-500/10 dark:text-slate-200"
                >
                  <span className="flex items-center gap-3">
                    <span>📁</span>
                    <span>Admin Help</span>
                  </span>
                  <span className="text-sky-400">+</span>
                </Link>
              </li>
            </ul>
          </article>
        </section>
      )}
    </div>
  );
}
