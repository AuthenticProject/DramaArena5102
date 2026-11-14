import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { ShowCategoryData } from '../types';

interface TrailerModalProps {
  show: ShowCategoryData | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="da-show-modal-layer" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="da-show-modal" role="dialog" aria-modal="true" aria-labelledby="da-show-modal-title">
        <div className="da-show-modal-visual">
          <img src={show.img} alt="" />
          <div className="da-show-modal-shade" />
          <button type="button" onClick={onClose} className="da-show-modal-close" aria-label="Tutup detail pertunjukan">
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
