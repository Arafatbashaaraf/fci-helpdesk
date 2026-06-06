import { Navigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ArticleContent from '../components/ArticleContent';
import { articles, navItems } from '../data/guideContent';
import styles from './ArticlePage.module.css';

const ids = new Set(navItems.map((n) => n.id));

export default function ArticlePage() {
  const { articleId } = useParams();

  if (!articleId || !ids.has(articleId)) {
    const fallback = navItems[0]?.id ?? 'overview';
    return <Navigate to={`/company-profile-setup-guide/${fallback}`} replace />;
  }

  const article = articles[articleId];

  return (
    <div className={styles.wrap}>
      <Sidebar />
      <main className={styles.main}>
        <ArticleContent article={article} />
      </main>
    </div>
  );
}
