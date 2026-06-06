import { Navigate, Route, Routes } from 'react-router-dom';
import DocsLayout from './layouts/DocsLayout';
import HomePage from './pages/HomePage';
import DocsHubPage from './pages/DocsHubPage';
import EmployeeHelpPage from './pages/EmployeeHelpPage';
import NotFoundPage from './pages/NotFoundPage';
export default function App() {
  return (
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
  );
}
