import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Bot,
  ChevronDown,
  Code2,
  Headphones,
  Search,
  Shield,
  Smartphone,
  Users,
  Wrench,
  Globe,
  Share2,
  MessageCircle,
  Mail,
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import SearchBar from '../components/SearchBar';
import ProductShowcaseSection from '../components/showcase/ProductShowcaseSection';
import styles from './HelpDeskHomePage.module.css';

const EMPLOYEE_HELP =
  '/docs/employee-help/employee-help/account/how-do-i-log-in-to-fci';
const ADMIN_HELP =
  '/docs/employee-help/admin-help/account/how-do-i-log-in-to-fci';

const HELP_CARDS = [
  {
    title: 'Employee Help',
    desc: 'Step-by-step guides for leads, members, payments, and daily tasks.',
    icon: Users,
    to: EMPLOYEE_HELP,
  },
  {
    title: 'Admin Help',
    desc: 'Configuration, policies, and admin dashboard documentation.',
    icon: BookOpen,
    to: ADMIN_HELP,
  },
  {
    title: 'Technical Support',
    desc: 'Troubleshooting, fixes, and help from the support team.',
    icon: Wrench,
    to: '#support',
  },
  {
    title: 'API Documentation',
    desc: 'Integration guides and developer reference materials.',
    icon: Code2,
    to: '/docs',
  },
];

const FEATURES = [
  { icon: Search, title: 'Instant Search', desc: 'Find any article in seconds across the full knowledge base.' },
  { icon: Bot, title: 'AI Assistant', desc: 'Smart answers powered by your documentation and help content.' },
  { icon: Shield, title: 'Secure Documentation', desc: 'Role-based access for employees and administrators.' },
  { icon: Smartphone, title: 'Mobile Friendly', desc: 'Read and search guides on any device, anywhere.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Always-on help resources for your entire organization.' },
];

const FAQ = [
  {
    q: 'How do I find employee help articles?',
    a: 'Open Documentation or use the search bar above. Choose Employee Help to browse leads, members, transactions, and more.',
  },
  {
    q: 'Where is admin configuration documented?',
    a: 'Select Admin Help from the cards below or open Documentation and pick the admin section.',
  },
  {
    q: 'Can I search without opening a category?',
    a: 'Yes. Type in the hero search box — results link directly to the matching guide.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TypingHeading() {
  const full = 'FCI Help Desk';
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= full.length) {
        setText(full.slice(0, i));
        i += 1;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return <h1 className={styles.heroTitle}>{text}</h1>;
}

function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.accordion}>
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className={styles.accordionItem}>
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
          </div>
        );
      })}
    </div>
  );
}

export default function HelpDeskHomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="home">
        <div className={styles.heroGlow} aria-hidden />
        <motion.div
          className={styles.heroCard}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TypingHeading />
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Smart documentation, employee support, admin guides and instant search.
          </motion.p>

          <motion.div
            className={styles.searchWrap}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className={styles.searchGlass}>
              <SearchBar
                className="w-full"
                inputId="helpdesk-search"
                inputClassName={styles.searchInput}
                placeholder='Search guides… (press "/" to focus)'
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.heroBtns}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <Link to="/docs" className={styles.btnPrimary}>
              Explore Docs
            </Link>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Support
            </a>
          </motion.div>
        </motion.div>
      </section>

      <ProductShowcaseSection />

      <section className={styles.section} id="documentation">
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Documentation hubs
        </motion.h2>
        <motion.p
          className={styles.sectionLead}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Pick a category to open step-by-step FCI guides with screenshots.
        </motion.p>

        <div className={styles.cardsGrid}>
          {HELP_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link to={card.to} className={styles.helpCard}>
                  <div className={styles.cardIcon}>
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Platform features
        </motion.h2>
        <motion.p
          className={styles.sectionLead}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Built for fast answers and a premium support experience.
        </motion.p>

        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
              >
                <Icon className={styles.featureIcon} size={28} strokeWidth={1.5} />
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className={styles.section} id="support">
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Quick answers
        </motion.h2>
        <FaqAccordion />
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerInner}>
          <div>
            <BrandLogo
              asLink={false}
              className={styles.footerLogoWrap}
              imgClassName={styles.footerLogoImg}
            />
            <p className={styles.footerText}>
              AI powered help desk for employee guides, admin documentation, and instant
              support search.
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
      </footer>
    </div>
  );
}
