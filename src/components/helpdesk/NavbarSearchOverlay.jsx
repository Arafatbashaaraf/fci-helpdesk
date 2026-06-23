import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import SearchBar from '../SearchBar';
import styles from './NavbarSearchOverlay.module.css';

export default function NavbarSearchOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.panel}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search FCI guides"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Search FCI guides</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        <SearchBar
          autoFocus
          inputId="navbar-search"
          inputClassName="fci-search-input"
          resultsClassName="fci-search-results"
          resultsLayout="inline"
          placeholder="Search guides… (e.g. login, lead, payment)"
          onDismiss={onClose}
          onResultNavigate={onClose}
        />
      </div>
    </div>,
    document.body,
  );
}
