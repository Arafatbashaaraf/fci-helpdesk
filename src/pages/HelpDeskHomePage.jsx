import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  Mail,
  MessageCircle,
  Search,
  Share2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import SearchBar from '../components/SearchBar';
import styles from './HelpDeskHomePage.module.css';

const ProductShowcaseSection = lazy(
  () => import('../components/showcase/ProductShowcaseSection'),
);

const EMPLOYEE_HELP =
  '/docs/employee-help/employee-help/account/how-do-i-log-in-to-fci';
const ADMIN_HELP =
  '/docs/employee-help/admin-help/account/how-do-i-log-in-to-fci';

const HELP_CARDS = [
  {
    title: 'Employee Help',
    desc: 'Find solutions and guides for employee related queries.',
    icon: Users,
    to: EMPLOYEE_HELP,
  },
  {
    title: 'Admin Help',
    desc: 'Find solutions and guides for admin related queries.',
    icon: ShieldCheck,
    to: ADMIN_HELP,
  },
];

const POPULAR_ARTICLES = [
  {
    title: 'How do I log in to FCI?',
    tag: 'Account',
    to: '/docs/employee-help/employee-help/account/how-do-i-log-in-to-fci',
  },
  {
    title: 'How do I add a new lead?',
    tag: 'Employee',
    to: '/docs/employee-help/employee-help/lead/how-do-i-add-a-new-lead',
  },
  {
    title: 'How do I log in to FCI?',
    tag: 'Admin',
    to: ADMIN_HELP,
  },
];

const FEATURES = [
  {
    icon: Search,
    title: 'Instant Search',
    desc: 'Find any article in seconds across the full knowledge base.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Always-on help resources for your entire organization.',
  },
];

const FAQ = [
  {
    q: 'How do I find employee help articles?',
    a: 'Open Documentation or use the search bar above. Choose Employee Help to browse leads, members, transactions, and more.',
  },
  {
    q: 'Where is admin configuration documented?',
    a: 'Select Admin Help from the cards above or open Documentation and pick the admin section.',
  },
  {
    q: 'Can I search without opening a category?',
    a: 'Yes. Type in the hero search box — results link directly to the matching guide.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

const popIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const noMotion = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function FaqAccordion({ variants }) {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.accordion}>
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.q}
            className={styles.accordionItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={variants}
            custom={index}
          >
            <button
              type="button"
              className={styles.accordionBtn}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              {item.q}
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <motion.div
              className={styles.accordionBody}
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={styles.accordionContent}>{item.a}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function HelpDeskHomePage() {
  const reduceMotion = useReducedMotion();
  const motionFade = reduceMotion ? noMotion : fadeUp;
  const motionPop = reduceMotion ? noMotion : popIn;

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.topBar}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} className={styles.breadcrumbSep} aria-hidden />
            <span className={styles.breadcrumbCurrent}>FCI User Guide</span>
          </nav>
          <Link to="/docs" className={styles.browseTopics}>
            <HelpCircle size={16} aria-hidden />
            Browse topics
          </Link>
        </div>

        <motion.section
          className={styles.hero}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionPop}
        >
          <h1 className={styles.heroTitle}>How can we help you today?</h1>
          <p className={styles.heroSub}>
            Search our knowledge base or browse topics to find the answers you need.
          </p>

          <div className={styles.searchWrap}>
            <Search size={18} className={styles.searchIcon} aria-hidden />
            <SearchBar
              className={styles.searchBar}
              inputId="helpdesk-search"
              inputClassName={styles.searchInput}
              placeholder="Search for articles, topics, or keywords..."
            />
          </div>
        </motion.section>

        <section className={styles.categories} aria-label="Help categories">
          <div className={styles.cardsGrid}>
            {HELP_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={motionFade}
                  custom={i}
                >
                  <Link to={card.to} className={styles.helpCard}>
                    <div className={styles.cardIconWrap}>
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <p className={styles.cardDesc}>{card.desc}</p>
                    <span className={styles.cardArrow} aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        <motion.section
          className={styles.popular}
          aria-labelledby="popular-articles"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={motionPop}
        >
          <div className={styles.popularHeader}>
            <h2 id="popular-articles" className={styles.popularTitle}>
              Popular Articles
            </h2>
            <Link to="/docs" className={styles.viewAll}>
              View all
            </Link>
          </div>

          <ul className={styles.articleList}>
            {POPULAR_ARTICLES.map((article, i) => (
              <motion.li
                key={`${article.tag}-${article.to}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
                variants={motionFade}
                custom={i}
              >
                <Link to={article.to} className={styles.articleRow}>
                  <span className={styles.articleIcon} aria-hidden>
                    <FileText size={18} strokeWidth={1.75} />
                  </span>
                  <span className={styles.articleTitle}>{article.title}</span>
                  <span className={styles.articleTag}>{article.tag}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>

      <Suspense fallback={null}>
        <ProductShowcaseSection />
      </Suspense>

      <section className={`${styles.scrollSection} help-perf-section`} id="features">
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionFade}
        >
          Platform features
        </motion.h2>
        <motion.p
          className={styles.sectionLead}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionFade}
          custom={1}
        >
          Built for fast answers and a premium support experience.
        </motion.p>

        <div className={styles.featuresGrid}>
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={motionFade}
                custom={i}
                whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <Icon className={styles.featureIcon} size={28} strokeWidth={1.5} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className={`${styles.scrollSection} help-perf-section`} id="support">
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionFade}
        >
          Quick answers
        </motion.h2>
        <FaqAccordion variants={motionFade} />
      </section>

      <motion.footer
        className={`${styles.footer} help-perf-section`}
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={motionPop}
      >
        <div className={styles.footerInner}>
          <div>
            <BrandLogo
              asLink={false}
              className={styles.footerLogoWrap}
              imgClassName={styles.footerLogoImg}
            />
            <p className={styles.footerText}>
              Help desk for employee guides, admin documentation, and instant support search.
            </p>
            <div className={styles.socialRow}>
              <a href="https://github.com" className={styles.socialBtn} aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="https://linkedin.com" className={styles.socialBtn} aria-label="Share">
                <Share2 size={18} />
              </a>
              <a href="https://twitter.com" className={styles.socialBtn} aria-label="Community">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:support@fci.com" className={styles.socialBtn} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className={styles.footerHeading}>Documentation</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/docs">All docs</Link>
              </li>
              <li>
                <Link to={EMPLOYEE_HELP}>Employee Help</Link>
              </li>
              <li>
                <Link to={ADMIN_HELP}>Admin Help</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.footerHeading}>Support</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#support">Help center</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="mailto:support@fci.com">support@fci.com</a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} FCI — FITCOREXAI International Pvt Ltd. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
