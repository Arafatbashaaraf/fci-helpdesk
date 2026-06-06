import { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchDocs } from '../utils/docs';

const SEARCH_MIN_CHARS = 2;

export default function SearchBar({
  className = '',
  placeholder = 'Search docs...',
  inputId,
  inputClassName = '',
  resultsClassName = '',
  resultsLayout = 'dropdown',
  onActiveChange,
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const rootRef = useRef(null);

  const results = useMemo(() => searchDocs(query), [query]);
  const isActive = query.trim().length >= SEARCH_MIN_CHARS;

  useEffect(() => {
    onActiveChange?.(isActive);
  }, [isActive, onActiveChange]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === '/' && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === 'Escape') {
        setQuery('');
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const showResults = open && isActive;
  const resultsPanelClass =
    resultsLayout === 'inline'
      ? `mt-3 w-full rounded-xl border p-2 shadow-lg fci-search-results ${resultsClassName}`
      : `absolute top-full z-[100] mt-2 w-full rounded-xl border p-2 shadow-xl fci-search-results ${resultsClassName}`;

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <input
        id={inputId}
        ref={inputRef}
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className={inputClassName || 'fci-search-input'}
        autoComplete="off"
      />

      {showResults && (
        <div className={resultsPanelClass}>
          {results.length > 0 ? (
            <ul
              data-lenis-prevent
              className="max-h-[min(60vh,420px)] space-y-1 overflow-y-auto"
            >
              {results.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => {
                      setOpen(false);
                      setQuery('');
                    }}
                    className="block rounded-lg px-3 py-2.5 transition hover:bg-sky-500/15"
                  >
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {item.title}
                    </p>
                    <p className="line-clamp-2 text-xs text-slate-600 dark:text-slate-400">
                      {item.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400">
              No matching guides found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
