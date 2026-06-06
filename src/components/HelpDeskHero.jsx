import { Link } from 'react-router-dom';
import styles from './HelpDeskHero.module.css';

const COPY = {
  home: {
    title: 'Help Desk Support',
    lead:
      'Welcome to the FCI User Guide. Find step-by-step help for employees and admins — add leads, add members, and complete daily tasks with clear instructions and screenshots.',
    cta: 'Learn More',
    ctaTo: '/docs',
  },
  compact: {
    title: 'FCI User Guide',
    lead: 'Browse Employee Help and Admin Help articles. Pick a topic below or use search on the home page.',
    cta: 'Back to home',
    ctaTo: '/',
  },
};

export default function HelpDeskHero({ variant = 'home' }) {
  const copy = COPY[variant] ?? COPY.home;

  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-labelledby="help-desk-hero-title">
      <div className={styles.layout}>
        <div className={`${styles.contentPane} help-h-scroll-viewport`}>
          <div className="help-content-scroll-inner">
            <div className={styles.content}>
              <h1 id="help-desk-hero-title" className={styles.title}>
                {copy.title}
              </h1>
              <p className={styles.lead}>{copy.lead}</p>
              <Link to={copy.ctaTo} className={styles.cta}>
                {copy.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
