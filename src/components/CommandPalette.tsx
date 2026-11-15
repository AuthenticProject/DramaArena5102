import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface CommandPaletteProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const destinations = [
  { id: 'hero', number: '00', title: 'Beranda & identitas', detail: 'Pembuka, lambang resmi, dan gambaran Drama Arena 5102', keywords: 'home hero logo identitas' },
  { id: 'ide-pokok', number: '01', title: 'Ide pokok & mahfudzot', detail: 'Gagasan utama dan landasan perjuangan', keywords: 'konsep ide pokok mahfudzot' },
  { id: 'theme', number: '02', title: 'Tema & moto', detail: 'Filosofi tema dan tiga moto acara', keywords: 'tema motto filosofi' },
  { id: 'about', number: '03', title: 'Filosofi visual', detail: 'Makna logo, palet warna, dan tipografi', keywords: 'logo warna tipografi visual' },
  { id: 'map-3d', number: '04', title: 'Peta kampus Gontor', detail: 'Jelajahi persebaran kampus melalui peta interaktif', keywords: 'peta indonesia kampus lokasi' },
  { id: 'shows', number: '05', title: 'Ragam pertunjukan', detail: 'Musik, teater, tari, seni rupa, dan multimedia', keywords: 'acara pentas musik drama tari seni' },
  { id: 'committee', number: '06', title: 'Panitia & produksi', detail: 'Tim pelaksana dan catatan produksi', keywords: 'panitia organisasi produksi anggaran' },
  { id: 'media-showcase', number: '07', title: 'Arsip media', detail: 'Dokumentasi, artefak, dan panduan visual resmi', keywords: 'arsip foto galeri media guideline' },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onNavigate, activeSection }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('id');
    if (!normalized) return destinations;
    return destinations.filter((item) =>
      `${item.title} ${item.detail} ${item.keywords} ${item.number}`.toLocaleLowerCase('id').includes(normalized)
    );
  }, [query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches('input, textarea, select, [contenteditable="true"]');
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      } else if (event.key === '/' && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    setQuery('');
    setActiveIndex(0);
    window.requestAnimationFrame(() => inputRef.current?.focus());

    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled])'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleDialogKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleDialogKeys);
      previousFocus?.focus();
    };
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  const visit = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && results[activeIndex]) {
      event.preventDefault();
      visit(results[activeIndex].id);
    }
  };

  return (
    <>
      <button
        type="button"
        className="da-explore-trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-keyshortcuts="Control+K Meta+K /"
        aria-label="Buka pusat eksplorasi website"
      >
        <Search size={16} />
        <span>Jelajahi</span>
        <kbd>⌘ K</kbd>
      </button>

      {open && (
        <div className="da-command-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <div
            ref={dialogRef}
            className="da-command-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="da-command-title"
            aria-describedby="da-command-description"
          >
            <div className="da-command-heading">
              <div className="da-command-brand">
                <span className="da-command-mark"><Sparkles size={17} /></span>
                <div>
                  <span className="da-command-eyebrow">DRAMA ARENA 5102 · EXPLORER</span>
                  <h2 id="da-command-title">Ke mana kita pergi?</h2>
                </div>
              </div>
              <button type="button" className="da-command-close" onClick={() => setOpen(false)} aria-label="Tutup pusat eksplorasi"><X size={19} /></button>
            </div>
            <p id="da-command-description" className="da-command-description">Cari bagian, topik, atau pengalaman yang ingin kamu jelajahi.</p>
            <label className="da-command-search">
              <Search size={18} aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Cari pertunjukan, arsip, kampus..."
                aria-label="Cari bagian website"
                autoComplete="off"
              />
              <kbd>ESC</kbd>
            </label>
            <div className="da-command-results-head">
              <span>{query ? 'HASIL PENCARIAN' : 'JELAJAHI BAB'}</span>
              <span>{String(results.length).padStart(2, '0')} DESTINASI</span>
            </div>
            <div className="da-command-results" role="listbox" aria-label="Bagian website">
              {results.map((item, index) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={activeIndex === index}
                  key={item.id}
                  className={`da-command-result ${activeIndex === index ? 'is-active' : ''} ${activeSection === item.id ? 'is-current' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => visit(item.id)}
                >
                  <span className="da-command-number">{item.number}</span>
                  <span className="da-command-result-copy">
                    <strong>{item.title}</strong>
                    <small>{item.detail}</small>
                  </span>
                  {activeSection === item.id && <span className="da-command-current">ANDA DI SINI</span>}
                  <ArrowRight size={16} className="da-command-arrow" />
                </button>
              ))}
              {results.length === 0 && (
                <div className="da-command-empty">
                  <Search size={22} />
                  <strong>Belum ada bab yang cocok.</strong>
                  <span>Coba kata lain seperti “peta”, “tari”, atau “arsip”.</span>
                </div>
              )}
            </div>
            <div className="da-command-footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> PILIH</span>
              <span><kbd>ENTER</kbd> BUKA BAB</span>
              <span className="da-command-footer-note">AN ARCHIVE OF TOGETHERNESS</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
