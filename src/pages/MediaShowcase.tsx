import React, { useMemo, useState } from 'react';
import { ArrowLeft, Eye, Image as ImageIcon, Layers, Palette, Shirt, Type, Camera, ArrowUpRight } from 'lucide-react';
import { importImage, importRef, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
import { SectionLabel, FleuronDivider } from '../components/HeroSection';
import { PhotoGallery } from '../components/PhotoGallery';

interface MediaShowcaseProps {
  onBackToHome?: () => void;
  onOpenSponsorshipModal?: () => void;
}

type MediaTab = 'all' | 'guideline' | 'logo' | 'typography' | 'color' | 'merchandise' | 'photo';
const tabs: { id: MediaTab; label: string; short: string; icon: React.ComponentType }[] = [
  { id: 'all', label: 'Semua koleksi', short: 'SEMUA', icon: Layers },
  { id: 'guideline', label: 'Brand guidelines', short: 'PANDUAN', icon: ImageIcon },
  { id: 'logo', label: 'Logo & monogram', short: 'LAMBANG', icon: Eye },
  { id: 'typography', label: 'Tipografi', short: 'HURUF', icon: Type },
  { id: 'color', label: 'Palet warna', short: 'WARNA', icon: Palette },
  { id: 'merchandise', label: 'Merchandise & artefak', short: 'ARTEFAK', icon: Shirt },
  { id: 'photo', label: 'Dokumentasi foto', short: 'FOTO', icon: Camera },
];

const resolveAsset = (asset: DAAsset) => asset.category === 'guideline' ? importRef(asset.name) : importImage(asset.name);

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<MediaTab>('all');
  const [selectedAsset, setSelectedAsset] = useState<DAAsset | null>(null);
  const filteredAssets = useMemo(() => activeTab === 'all' ? ALL_ASSETS : ALL_ASSETS.filter((asset) => asset.category === activeTab), [activeTab]);
  const counts = useMemo(() => tabs.reduce((acc, tab) => ({ ...acc, [tab.id]: tab.id === 'all' ? ALL_ASSETS.length : ALL_ASSETS.filter((asset) => asset.category === tab.id).length }), {} as Record<MediaTab, number>), []);

  return (
    <section id="media-showcase" className="da-media-section relative overflow-hidden py-24 px-4 sm:px-6 md:px-12 scroll-mt-14">
      <div className="da-media-watermark" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="da-media-topline">
          <button type="button" onClick={() => onBackToHome ? onBackToHome() : window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowLeft size={15} /> KEMBALI KE BERANDA
          </button>
          <span>DA.5102 <i>—</i> DEPARTEMEN DOKUMENTASI</span>
          <span>{ALL_ASSETS.length.toString().padStart(2, '0')} MASTER ASSETS</span>
        </div>

        <header className="da-media-heading">
          <span className="da-media-eyebrow"><span /> OFFICIAL MEDIA ARCHIVE · EST. 5102</span>
          <SectionLabel text="ARSIP VISUAL & PANDUAN RESMI" />
          <h1>Memory, <em>Material</em><br />& Meaning.</h1>
          <FleuronDivider />
          <p>Catatan visual perjalanan Drama Arena 5102 — dari sistem identitas, artefak, hingga dokumentasi panggung yang menyimpan cerita di balik setiap karya.</p>
          <div className="da-media-heading-foot">
            <span>THE COMPLETE VISUAL RECORD</span>
            <span>PMDG · CLASS OF 5102</span>
          </div>
        </header>

        <div className="da-media-index">
          <div className="da-media-index-title">
            <span>INDEKS KOLEKSI</span>
            <span>SELECT A COLLECTION TO EXPLORE</span>
          </div>
          <div className="da-media-tabs" role="tablist" aria-label="Kategori arsip visual">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'is-active' : ''} onClick={() => setActiveTab(tab.id)}>
                  <Icon size={15} />
                  <span>{tab.label}</span>
                  <small>{String(counts[tab.id]).padStart(2, '0')}</small>
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === 'all' ? (
          <div className="da-media-all">
            <section className="da-media-feature">
              <div className="da-media-feature-copy">
                <span>01 / THE VISUAL IDENTITY</span>
                <h2>Every detail<br /><em>has a story.</em></h2>
                <p>Jelajahi elemen pembentuk identitas visual: lambang, huruf, warna, dan panduan resmi yang menjadi satu kesatuan bahasa visual Drama Arena 5102.</p>
                <button type="button" onClick={() => setActiveTab('guideline')}>JELAJAHI PANDUAN <ArrowUpRight size={15} /></button>
              </div>
              <div className="da-media-feature-image">
                <img src={importRef('slide-12-key-visual.jpg')} alt="Key visual identitas Drama Arena 5102" />
                <span>PLATE 01 — KEY VISUAL</span>
              </div>
            </section>
            <div className="da-media-collection-grid">
              {tabs.filter((tab) => tab.id !== 'all').map((tab, index) => {
                const Icon = tab.icon;
                const preview = ALL_ASSETS.find((asset) => asset.category === tab.id);
                return (
                  <button type="button" key={tab.id} className="da-media-collection" onClick={() => setActiveTab(tab.id)}>
                    <span className="da-media-collection-image">
                      {preview && <img src={resolveAsset(preview)} alt="" loading="lazy" />}
                      <span>0{index + 1}</span>
                    </span>
                    <span className="da-media-collection-info">
                      <span><Icon size={14} /> {tab.short} · {String(counts[tab.id]).padStart(2, '0')} ITEMS</span>
                      <strong>{tab.label}</strong>
                      <i>BUKA KOLEKSI <ArrowUpRight size={13} /></i>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <section className="da-media-results" role="tabpanel">
            <div className="da-media-results-head">
              <div>
                <span>COLLECTION / {tabs.find((tab) => tab.id === activeTab)?.short}</span>
                <h2>{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
              </div>
              <span>{String(filteredAssets.length).padStart(2, '0')} ITEMS IN THIS COLLECTION</span>
            </div>
            {activeTab === 'photo' || activeTab === 'merchandise' ? (
              <PhotoGallery categoryFilter={activeTab} />
            ) : (
              <div className={activeTab === 'guideline' ? 'da-media-guideline-grid' : 'da-media-asset-grid'}>
                {filteredAssets.map((asset, index) => (
                  <button type="button" key={asset.id} className={`da-media-asset da-media-asset-${index % 4}`} onClick={() => setSelectedAsset(asset)}>
                    <span className="da-media-asset-image">
                      <img src={resolveAsset(asset)} alt={asset.title} loading="lazy" />
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <i><Eye size={16} /> VIEW ASSET</i>
                    </span>
                    <span className="da-media-asset-copy">
                      <small>{asset.subtitle}</small>
                      <strong>{asset.title}</strong>
                      <span>{asset.dimensions.width} × {asset.dimensions.height} PX <ArrowUpRight size={14} /></span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        <footer className="da-media-footer">
          <span>DRAMA ARENA 5102 <i>·</i> PMDG</span>
          <span>AN ARCHIVE OF IDEAS, EFFORT & BROTHERHOOD</span>
          <span>END OF COLLECTION / 5102</span>
        </footer>
      </div>

      {selectedAsset && (
        <div className="da-media-detail" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedAsset(null); }}>
          <div className="da-media-detail-card" role="dialog" aria-modal="true" aria-label={selectedAsset.title}>
            <div className="da-media-detail-top"><span>{selectedAsset.category.toUpperCase()} / DA 5102</span><button type="button" onClick={() => setSelectedAsset(null)} aria-label="Tutup"><span>×</span></button></div>
            <div className="da-media-detail-image"><img src={resolveAsset(selectedAsset)} alt={selectedAsset.title} /></div>
            <div className="da-media-detail-copy">
              <small>{selectedAsset.subtitle}</small>
              <h2>{selectedAsset.title}</h2>
              <p>{selectedAsset.description}</p>
              <div><span>{selectedAsset.dimensions.width} × {selectedAsset.dimensions.height} PX</span><a href={resolveAsset(selectedAsset)} target="_blank" rel="noreferrer">BUKA FILE ASLI <ArrowUpRight size={14} /></a></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaShowcase;
