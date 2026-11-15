import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { importImage, importRef, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, ArrowUpRight } from 'lucide-react';

interface PhotoGalleryProps {
  categoryFilter?: 'all' | 'photo' | 'graphic' | 'merchandise';
  onSelectAsset?: (asset: DAAsset) => void;
  className?: string;
}

const getAssetUrl = (asset: DAAsset) =>
  asset.category === 'guideline' ? importRef(asset.name) : importImage(asset.name);

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  categoryFilter = 'all',
  onSelectAsset,
  className = '',
}) => {
  const galleryItems = useMemo(() => ALL_ASSETS.filter((item) => {
    if (categoryFilter === 'all') return item.category === 'photo' || item.category === 'merchandise';
    if (categoryFilter === 'graphic') return ['logo', 'typography', 'color', 'guideline'].includes(item.category);
    return item.category === categoryFilter;
  }), [categoryFilter]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const selectedAsset = selectedIndex === null ? null : galleryItems[selectedIndex];

  const close = useCallback(() => setSelectedIndex(null), []);
  const move = useCallback((direction: number) => {
    setSelectedIndex((current) => current === null || galleryItems.length === 0 ? null : (current + direction + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  const handleStagePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return;
    touchStartRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleStagePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || event.pointerType !== 'touch') return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    move(deltaX < 0 ? 1 : -1);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('.da-lightbox[role="dialog"]');
        if (!dialog) return;
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (!focusable.length) { event.preventDefault(); dialog.focus(); return; }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [selectedIndex, galleryItems.length, close, move]);

  return (
    <div className={`da-gallery-shell ${className}`}>
      <div className="da-gallery-meta">
        <span>THE VISUAL RECORD · 5102</span>
        <span>{String(galleryItems.length).padStart(2, '0')} ARTEFAK / FOTO</span>
      </div>
      <div className="da-gallery-grid">
        {galleryItems.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={`da-gallery-item da-gallery-item-${index % 5}`}
            onClick={() => {
              setSelectedIndex(index);
              onSelectAsset?.(item);
            }}
            aria-label={`Buka ${item.title}`}
          >
            <span className="da-gallery-image">
              <img src={getAssetUrl(item)} alt={item.title} loading="lazy" decoding="async" />
              <span className="da-gallery-image-wash" />
              <span className="da-gallery-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="da-gallery-zoom"><ZoomIn size={17} /> LIHAT ARSIP</span>
            </span>
            <span className="da-gallery-caption">
              <span className="da-gallery-caption-kicker">{item.subtitle}</span>
              <strong>{item.title}</strong>
              <span className="da-gallery-caption-foot">
                <span>{item.category.toUpperCase()} / DA 5102</span>
                <ArrowUpRight size={15} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedAsset && selectedIndex !== null && (
        <div
          className="da-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="da-lightbox-title"
          aria-describedby="da-lightbox-description"
          tabIndex={-1}
          onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}
        >
          <div className="da-lightbox-topline">
            <span>DRAMA ARENA 5102 <i>/</i> VISUAL ARCHIVE</span>
            <span>{String(selectedIndex + 1).padStart(2, '0')} — {String(galleryItems.length).padStart(2, '0')}</span>
          </div>
          <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            Arsip {selectedIndex + 1} dari {galleryItems.length}: {selectedAsset.title}
          </p>
          <button ref={closeButtonRef} type="button" className="da-lightbox-close" onClick={close} aria-label="Tutup lightbox"><X size={20} /></button>
          <button type="button" className="da-lightbox-nav da-lightbox-prev" onClick={() => move(-1)} aria-label="Arsip sebelumnya"><ChevronLeft size={24} /></button>
          <div className="da-lightbox-stage" onPointerDown={handleStagePointerDown} onPointerUp={handleStagePointerUp} onPointerCancel={() => { touchStartRef.current = null; }}>
            <img src={getAssetUrl(selectedAsset)} alt={selectedAsset.title} decoding="async" />
          </div>
          <button type="button" className="da-lightbox-nav da-lightbox-next" onClick={() => move(1)} aria-label="Arsip berikutnya"><ChevronRight size={24} /></button>
          <div className="da-lightbox-caption">
            <div>
              <span>{selectedAsset.category.toUpperCase()} · {selectedAsset.dimensions.width} × {selectedAsset.dimensions.height} PX</span>
              <h3 id="da-lightbox-title">{selectedAsset.title}</h3>
              <p id="da-lightbox-description">{selectedAsset.description}</p>
            </div>
            <a href={getAssetUrl(selectedAsset)} target="_blank" rel="noreferrer">
              BUKA FILE ASLI <Maximize2 size={14} />
            </a>
          </div>
          <div className="da-lightbox-keyhint">GESER FOTO / GUNAKAN ← → · ESC UNTUK KELUAR</div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
