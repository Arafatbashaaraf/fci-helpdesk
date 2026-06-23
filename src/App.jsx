import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DocsLayout from './layouts/DocsLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const DocsHubPage = lazy(() => import('./pages/DocsHubPage'));
const EmployeeHelpPage = lazy(() => import('./pages/EmployeeHelpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-500 dark:text-slate-400">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<DocsLayout />}>
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocsHubPage />} />
          <Route
            path="docs/employee-help"
            element={
              <Navigate
                to="/docs/employee-help/employee-help/account/how-do-i-log-in-to-fci"
                replace
              />
            }
          />
          <Route
            path="docs/employee-help/:groupSlug/:categorySlug/:articleSlug"
            element={<EmployeeHelpPage />}
          />
          <Route path="docs/:slug" element={<Navigate to="/docs" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
