import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { ShowCategoryData } from '../types';

interface TrailerModalProps {
  show: ShowCategoryData | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ show, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!show) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const dialog = document.querySelector<HTMLElement>('.da-show-modal[role="dialog"]');
      if (!dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="da-show-modal-layer" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="da-show-modal" role="dialog" aria-modal="true" aria-labelledby="da-show-modal-title" tabIndex={-1}>
        <div className="da-show-modal-visual">
          <img src={show.img} alt="" />
          <div className="da-show-modal-shade" />
          <button ref={closeButtonRef} type="button" onClick={onClose} className="da-show-modal-close" aria-label="Tutup detail pertunjukan">
            <X size={18} />
          </button>
          <div className="da-show-modal-heading">
            <span>{show.number} / 04 · {show.category}</span>
            <h2 id="da-show-modal-title">{show.title}</h2>
          </div>
        </div>
        <div className="da-show-modal-content">
          <div className="da-show-modal-intro">
            <span className="da-kicker da-kicker-dark"><span className="da-kicker-dot" /> CATATAN PENTAS</span>
            <p>{show.desc || 'Rangkaian sajian dalam Pagelaran Seni Akbar Drama Arena 5102.'}</p>
          </div>
          <div className="da-show-modal-list-heading">
            <span>RANGKAIAN SAJIAN</span>
            <span>{String(show.items.length).padStart(2, '0')} MATERI</span>
          </div>
          <ol className="da-show-act-list">
            {show.items.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                <ArrowUpRight size={15} aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="da-show-modal-footer">
            <span>DRAMA ARENA 5102 · PMDG</span>
            <button type="button" onClick={onClose}>KEMBALI KE INDEKS <span>↗</span></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrailerModal;
