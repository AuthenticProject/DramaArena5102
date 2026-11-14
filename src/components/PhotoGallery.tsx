import React, { useEffect, useMemo, useState } from 'react';
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
  const selectedAsset = selectedIndex === null ? null : galleryItems[selectedIndex];

  const close = () => setSelectedIndex(null);
  const move = (direction: number) => {
    setSelectedIndex((current) => current === null ? null : (current + direction + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, galleryItems.length]);

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
              <img src={getAssetUrl(item)} alt={item.title} loading="lazy" />
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
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}
        >
          <div className="da-lightbox-topline">
            <span>DRAMA ARENA 5102 <i>/</i> VISUAL ARCHIVE</span>
            <span>{String(selectedIndex + 1).padStart(2, '0')} — {String(galleryItems.length).padStart(2, '0')}</span>
          </div>
          <button type="button" className="da-lightbox-close" onClick={close} aria-label="Tutup lightbox"><X size={20} /></button>
          <button type="button" className="da-lightbox-nav da-lightbox-prev" onClick={() => move(-1)} aria-label="Arsip sebelumnya"><ChevronLeft size={24} /></button>
          <div className="da-lightbox-stage">
            <img src={getAssetUrl(selectedAsset)} alt={selectedAsset.title} />
          </div>
          <button type="button" className="da-lightbox-nav da-lightbox-next" onClick={() => move(1)} aria-label="Arsip berikutnya"><ChevronRight size={24} /></button>
          <div className="da-lightbox-caption">
            <div>
              <span>{selectedAsset.category.toUpperCase()} · {selectedAsset.dimensions.width} × {selectedAsset.dimensions.height} PX</span>
              <h3>{selectedAsset.title}</h3>
              <p>{selectedAsset.description}</p>
            </div>
            <a href={getAssetUrl(selectedAsset)} target="_blank" rel="noreferrer">
              BUKA FILE ASLI <Maximize2 size={14} />
            </a>
          </div>
          <div className="da-lightbox-keyhint">GUNAKAN ← → UNTUK MENJELAJAH · ESC UNTUK KELUAR</div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
