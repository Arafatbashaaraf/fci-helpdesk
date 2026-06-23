import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '../BrandLogo';
import ThemeToggle from '../ThemeToggle';
import NavbarSearchOverlay from './NavbarSearchOverlay';
import styles from './HelpDeskNavbar.module.css';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/docs', label: 'Documentation' },
  { to: '/#contact', label: 'Contact' },
  { to: '/#support', label: 'Support' },
];

export default function HelpDeskNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <NavbarSearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className={styles.inner}>
        <BrandLogo className={styles.logoLink} imgClassName={styles.logoImg} />

        <nav className={styles.desktopNav} aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navActive : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/docs" className={styles.getStarted}>
            Get Started
          </Link>
          <ThemeToggle className={styles.themeToggle} />
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Search guides"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(true)}
          >
            <Search size={18} />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Profile">
            <User size={18} />
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              className={styles.mobileLink}
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
            >
              Search guides
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
