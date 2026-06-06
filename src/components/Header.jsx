import { Link } from 'react-router-dom';
import { guideMeta } from '../data/guideContent';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden />
          <span>
            <span className={styles.brandTitle}>{guideMeta.productName}</span>
            <span className={styles.brandSub}>{guideMeta.tagline}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
