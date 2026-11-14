import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Layers, Image as ImageIcon, Shirt, Feather, Maximize2, Download, Eye, ChevronLeft, ChevronRight, X, BookOpen, Camera } from 'lucide-react';
import { importImage, importRef, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
import { TypographyDecor } from '../components/TypographyDecor';
import { FleuronDivider, SectionLabel, GoldButton } from '../components/HeroSection';
import { PhotoGallery } from '../components/PhotoGallery';

interface MediaShowcaseProps {
  onBackToHome?: () => void;
  onOpenSponsorshipModal?: () => void;
}

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({
  onBackToHome,
  onOpenSponsorshipModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'guideline' | 'logo' | 'typography' | 'color' | 'merchandise' | 'photo'>('all');
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [selectedAssetForModal, setSelectedAssetForModal] = useState<DAAsset | null>(null);

  const guidelineAssets = ALL_ASSETS.filter((a) => a.category === 'guideline');
  const logoAssets = ALL_ASSETS.filter((a) => a.category === 'logo');
  const typographyAssets = ALL_ASSETS.filter((a) => a.category === 'typography');
  const colorAssets = ALL_ASSETS.filter((a) => a.category === 'color');
  const merchandiseAssets = ALL_ASSETS.filter((a) => a.category === 'merchandise');
  const photoAssets = ALL_ASSETS.filter((a) => a.category === 'photo');

  const filteredAssets = activeTab === 'all'
    ? ALL_ASSETS
    : ALL_ASSETS.filter((a) => a.category === activeTab);

  // Auto-rotate logo carousel
  useEffect(() => {
    if (isCarouselPaused || logoAssets.length === 0) return;
    const timer = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logoAssets.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isCarouselPaused, logoAssets.length]);

  return (
    <section
      id="media-showcase"
      className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#EDE8E2] text-[#192E41] border-t-2 border-[#B58A3C]/35 scroll-mt-14"
    >
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] bg-contain bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url("${importImage('logo-da-wave-transparent.png')}")` }}
      />

      {/* Top Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#B58A3C]/30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onBackToHome) {
                  onBackToHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B58A3C] bg-[#FAF8F5] hover:bg-[#B58A3C] hover:text-[#192E41] text-[#192E41] font-cormorant-sc text-xs tracking-widest uppercase transition-all duration-200 shadow-sm cursor-pointer font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Ke Beranda
            </button>
            <span className="text-xs font-mono text-[#192E41]/40 hidden sm:inline">/</span>
            <span className="font-cormorant-sc text-xs tracking-widest text-[#B58A3C] uppercase font-bold hidden sm:inline">
              Media Showcase & Panduan Identitas Visual DA 5102
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-cormorant-sc text-xs text-[#192E41]/70 font-semibold">Total Koleksi:</span>
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#192E41] text-[#EDE8E2] border border-[#B58A3C]">
              {ALL_ASSETS.length} Master Assets
            </span>
          </div>
        </div>

        {/* Page Title Banner */}
        <div className="text-center mt-8 mb-12 relative">
          <div className="luggage-tag mb-3 bg-[#FAF8F5]">
            <span className="luggage-tag-twine" />
            <span className="font-cormorant-sc text-xs tracking-widest font-bold uppercase">
              Official Media Archive · DA.5102
            </span>
          </div>
          <SectionLabel text="ARSIP VISUAL & PANDUAN RESMI" />
          <h1
            className="font-mileast italic font-bold mt-2 leading-tight gold-text"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 68px)' }}
          >
            Media Showcase 5102
          </h1>
          <FleuronDivider />
          <p className="font-alverata text-sm sm:text-base text-[#192E41]/85 max-w-2xl mx-auto mt-2 leading-relaxed">
            Eksplorasi seluruh mahakarya visual, 12 slide panduan identitas resmi, stempel prangko, kaligrafi, dan segel lilin Pagelaran Seni Akbar Drama Arena 5102 PMDG.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {[
              { id: 'all', label: `Semua (${ALL_ASSETS.length})` },
              { id: 'guideline', label: `Brand Guidelines (${guidelineAssets.length})` },
              { id: 'logo', label: `Logo & Monogram (${logoAssets.length})` },
              { id: 'typography', label: `Tipografi (${typographyAssets.length})` },
              { id: 'color', label: `Palet Warna (${colorAssets.length})` },
              { id: 'merchandise', label: `Merchandise & Artefak (${merchandiseAssets.length})` },
              { id: 'photo', label: `Dokumentasi Foto (${photoAssets.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full font-cormorant-sc text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer font-bold ${
                  activeTab === tab.id
                    ? 'bg-[#192E41] text-[#EDE8E2] shadow-md border-2 border-[#B58A3C]'
                    : 'bg-[#FAF8F5] hover:bg-[#B58A3C]/20 text-[#192E41] border border-[#192E41]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* ── Brand Guidelines Slides Gallery (The 12 Slides from REFERENSI) ── */}
        {(activeTab === 'all' || activeTab === 'guideline') && (
          <section className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border-2 border-[#B58A3C]/40 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#B58A3C]/25">
              <div>
                <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-[#B58A3C] font-bold">
                  ✦ PANDUAN RESMI BRAND GUIDELINES ✦
                </span>
                <h2 className="font-mileast font-bold text-2xl sm:text-3xl text-[#192E41] mt-1">
                  12 Slide Master Brand Guidelines
                </h2>
              </div>
              <span className="font-cormorant-sc text-xs text-[#325956] font-semibold">
                Resolusi QHD 2560 × 1440 px
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidelineAssets.map((asset, idx) => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAssetForModal(asset)}
                  className="has-registration-marks bg-[#EDE8E2] rounded-2xl overflow-hidden border border-[#B58A3C]/35 shadow group hover:shadow-2xl hover:border-[#B58A3C] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <span className="reg-mark reg-tl" />
                  <span className="reg-mark reg-tr" />
                  <span className="reg-mark reg-bl" />
                  <span className="reg-mark reg-br" />

                  <div className="relative aspect-video overflow-hidden bg-black/10">
                    <img
                      src={importRef(asset.name)}
                      alt={asset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#101D2A]/85 border border-[#B58A3C]/50 text-[10px] font-mono tracking-widest text-[#B58A3C] font-bold">
                      SLIDE {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#192E41]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-cormorant-sc text-[#EDE8E2] font-bold uppercase tracking-wider">
                        <Eye className="w-4 h-4 text-[#B58A3C]" /> Perbesar Resolusi Penuh
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mileast font-bold text-base text-[#192E41] group-hover:text-[#325956] transition-colors">
                        {asset.title}
                      </h4>
                      <p className="font-alverata text-xs text-[#192E41]/75 mt-1 line-clamp-2">
                        {asset.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#192E41]/10 flex items-center justify-between text-[11px] font-mono text-[#325956]">
                      <span>{asset.dimensions.width} × {asset.dimensions.height} px</span>
                      <span className="text-[#B58A3C] font-bold">DA 5102</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Logo & Monogram Assets Grid ── */}
        {(activeTab === 'all' || activeTab === 'logo') && (
          <section className="bg-[#192E41] text-[#EDE8E2] rounded-3xl p-6 sm:p-10 border-2 border-[#B58A3C]/40 shadow-2xl">
            <div className="mb-8 pb-4 border-b border-[#B58A3C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-[#B58A3C] font-bold">
                  ✦ LAMBANG & MONOGRAM RESMI ✦
                </span>
                <h2 className="font-mileast font-bold text-2xl sm:text-3xl gold-text mt-1">
                  Logo Resmi Berkas Transparan
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {logoAssets.map((logo) => (
                <div
                  key={logo.id}
                  onClick={() => setSelectedAssetForModal(logo)}
                  className="bg-[#101D2A] rounded-2xl p-6 border border-[#B58A3C]/30 shadow-lg hover:border-[#B58A3C] transition-all cursor-pointer flex flex-col items-center justify-between group"
                >
                  <div className="w-48 h-48 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-[#B58A3C]/10 transition-colors">
                    <img
                      src={importImage(logo.name)}
                      alt={logo.title}
                      className="max-h-40 max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-mileast font-bold text-lg text-[#EDE8E2]">
                      {logo.title}
                    </h4>
                    <p className="font-alverata text-xs text-[#EDE8E2]/70 mt-1">
                      {logo.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Typography & Swatches Grid ── */}
        {(activeTab === 'all' || activeTab === 'typography' || activeTab === 'color') && (
          <section className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#B58A3C]/30 shadow-xl">
            <div className="mb-8 pb-4 border-b border-[#B58A3C]/20">
              <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-[#325956] font-bold">
                ✦ TIPOGRAFI, PRANGKO & KARTU WARNA ✦
              </span>
              <h2 className="font-mileast font-bold text-2xl sm:text-3xl text-[#192E41] mt-1">
                Koleksi Elemen Grafis Autentik
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...typographyAssets, ...colorAssets].map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAssetForModal(asset)}
                  className="bg-[#EDE8E2] rounded-xl overflow-hidden border border-[#B58A3C]/30 hover:border-[#B58A3C] transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="p-4 bg-white/60 flex items-center justify-center min-h-[200px]">
                    <img
                      src={importImage(asset.name)}
                      alt={asset.title}
                      className="max-h-48 max-w-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 bg-[#FAF8F5] border-t border-[#B58A3C]/15">
                    <h4 className="font-mileast font-bold text-sm text-[#192E41]">
                      {asset.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#B58A3C] font-bold block mt-0.5">
                      {asset.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Photo Gallery Section (Archival Photos & Artifacts) ── */}
        {(activeTab === 'all' || activeTab === 'photo') && (
          <section className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#B58A3C]/35 shadow-xl">
            <div className="mb-8 pb-4 border-b border-[#B58A3C]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-[#325956] font-bold">
                  ✦ ARSIP FOTOGRAFI & DOKUMENTASI HISTORIS ✦
                </span>
                <h2 className="font-mileast font-bold text-2xl sm:text-3xl text-[#192E41] mt-1">
                  Galeri Panggung & Kebersamaan
                </h2>
              </div>
              <span className="font-cormorant-sc text-xs text-[#B58A3C] font-bold">
                Koleksi Dokumentasi Resmi DA 5102
              </span>
            </div>

            <PhotoGallery categoryFilter="photo" />
          </section>
        )}
      </div>

      {/* ── Asset Inspection Lightbox Modal ── */}
      {selectedAssetForModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedAssetForModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border-2 border-[#B58A3C] shadow-2xl text-[#192E41]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#192E41] text-[#EDE8E2] border-b border-[#B58A3C]/30">
              <div className="flex items-center gap-2">
                <span className="font-cormorant-sc text-xs tracking-widest uppercase font-bold text-[#B58A3C]">
                  {selectedAssetForModal.category.toUpperCase()} · DA 5102
                </span>
              </div>
              <button
                onClick={() => setSelectedAssetForModal(null)}
                className="p-1 rounded-full hover:bg-white/10 text-[#EDE8E2] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-6 bg-[#101D2A] flex items-center justify-center max-h-[60vh] overflow-auto">
              <img
                src={
                  selectedAssetForModal.category === 'guideline'
                    ? importRef(selectedAssetForModal.name)
                    : importImage(selectedAssetForModal.name)
                }
                alt={selectedAssetForModal.title}
                className="max-h-[55vh] max-w-full object-contain filter drop-shadow-2xl rounded"
              />
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 bg-[#FAF8F5]">
              <h3 className="font-mileast font-bold text-2xl text-[#192E41]">
                {selectedAssetForModal.title}
              </h3>
              <p className="font-cormorant-sc text-xs tracking-wider text-[#325956] font-bold uppercase mt-0.5">
                {selectedAssetForModal.subtitle}
              </p>
              <p className="font-alverata text-sm text-[#192E41]/85 mt-3 leading-relaxed">
                {selectedAssetForModal.description}
              </p>
              <div className="mt-6 pt-4 border-t border-[#192E41]/15 flex items-center justify-between">
                <span className="font-mono text-xs text-[#192E41]/60">
                  Dimensi Asli: {selectedAssetForModal.dimensions.width} × {selectedAssetForModal.dimensions.height} px
                </span>
                <a
                  href={
                    selectedAssetForModal.category === 'guideline'
                      ? importRef(selectedAssetForModal.name)
                      : importImage(selectedAssetForModal.name)
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#192E41] text-[#EDE8E2] font-cormorant-sc text-xs font-bold uppercase tracking-wider border border-[#B58A3C] hover:bg-[#325956] transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#B58A3C]" />
                  Buka Ukuran Penuh (HD)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default MediaShowcase;
