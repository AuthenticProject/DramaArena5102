import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Layers, Image as ImageIcon, Shirt, Feather, Maximize2, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { importImage, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
import { PhotoGallery } from '../components/PhotoGallery';
import { TypographyDecor } from '../components/TypographyDecor';
import { FleuronDivider, SectionLabel, GoldButton } from '../components/HeroSection';

interface MediaShowcaseProps {
  onBackToHome: () => void;
  onOpenSponsorshipModal: () => void;
}

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({
  onBackToHome,
  onOpenSponsorshipModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'logos' | 'photos' | 'typography' | 'merchandise'>('all');
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [selectedAssetForModal, setSelectedAssetForModal] = useState<DAAsset | null>(null);

  const logoAssets = ALL_ASSETS.filter((a) => a.category === 'logo');
  const typographyAssets = ALL_ASSETS.filter((a) => a.category === 'typography');
  const merchandiseAsset = ALL_ASSETS.find((a) => a.id === 'workshirt');
  const buildingAsset = ALL_ASSETS.find((a) => a.id === 'building');
  const assets1Asset = ALL_ASSETS.find((a) => a.id === 'assets-1');

  // Auto-rotate logo carousel
  useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logoAssets.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isCarouselPaused, logoAssets.length]);

  return (
    <div className="min-h-screen bg-[#F4F1EB] text-[#062B4A] pt-24 pb-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Repeating subtle typography background pattern */}
      <TypographyDecor
        sectionId="media"
        variant="3"
        mode="repeat-tile"
        opacity={0.025}
      />

      {/* Top Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D69103]/30">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D69103] bg-white/70 hover:bg-[#D69103] hover:text-white text-[#062B4A] font-cormorant-sc text-xs tracking-widest uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </button>
            <span className="text-xs font-mono text-[#062B4A]/40 hidden sm:inline">/</span>
            <span className="font-cormorant-sc text-xs tracking-widest text-[#D69103] uppercase font-bold hidden sm:inline">
              Media Showcase & Visual Assets
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-cormorant-sc text-xs text-[#062B4A]/60">Total Koleksi:</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#062B4A] text-[#D69103]">
              15 Master Assets
            </span>
          </div>
        </div>

        {/* Page Title Banner */}
        <div className="text-center mt-8 mb-12 relative">
          <SectionLabel text="ARSIP VISUAL & IDENTITAS RESMI" />
          <h1
            className="font-mileast italic font-bold mt-2 leading-tight gold-text"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 68px)' }}
          >
            Media Showcase 5102
          </h1>
          <FleuronDivider />
          <p className="font-baskerville text-sm sm:text-base text-[#062B4A]/80 max-w-2xl mx-auto mt-2 leading-relaxed">
            Eksplorasi seluruh mahakarya visual, tipografi ukir, lambang resmi, dan dokumentasi artistik Pagelaran Seni Akbar Drama Arena 5102 PMDG.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {[
              { id: 'all', label: 'Semua Koleksi' },
              { id: 'logos', label: 'Lambang & Logo (4)' },
              { id: 'photos', label: 'Dokumentasi & Banner (4)' },
              { id: 'typography', label: 'Arsip Tipografi (6)' },
              { id: 'merchandise', label: 'Seragam Panitia (1)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full font-cormorant-sc text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#062B4A] text-[#D69103] font-bold shadow-md border border-[#D69103]'
                    : 'bg-white/80 hover:bg-[#D69103]/10 text-[#062B4A] border border-[#062B4A]/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 1: Logo Showcase Carousel */}
        {(activeTab === 'all' || activeTab === 'logos') && (
          <section
            className="relative rounded-2xl p-6 sm:p-10 border border-[#D69103]/40 shadow-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #062B4A 0%, #031c33 100%)',
              color: '#F4F1EB',
            }}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <TypographyDecor
              sectionId="theme"
              variant="main"
              opacity={0.06}
              className="pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="font-cormorant-sc text-xs tracking-[0.3em] uppercase text-[#D69103]">
                    ✦ IDENTITAS BRANDING UTAMA ✦
                  </span>
                  <h2 className="font-mileast italic font-bold text-2xl sm:text-3xl text-white mt-1">
                    Koleksi Logo & Insignia Angkatan
                  </h2>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-[11px] font-cormorant-sc text-[#D69103] mr-2 hidden md:inline">
                    {isCarouselPaused ? 'Jeda Otomatis' : 'Rotasi Otomatis (4.5s)'}
                  </span>
                  <button
                    onClick={() =>
                      setActiveLogoIndex(
                        (prev) => (prev - 1 + logoAssets.length) % logoAssets.length
                      )
                    }
                    className="p-2 rounded-full border border-[#D69103]/40 text-[#D69103] hover:bg-[#D69103] hover:text-[#062B4A] transition-colors"
                    aria-label="Logo sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveLogoIndex((prev) => (prev + 1) % logoAssets.length)
                    }
                    className="p-2 rounded-full border border-[#D69103]/40 text-[#D69103] hover:bg-[#D69103] hover:text-[#062B4A] transition-colors"
                    aria-label="Logo berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Logo Active Card Presentation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 backdrop-blur-md">
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#021424] to-[#041d33] rounded-xl border border-[#D69103]/30 min-h-[300px]">
                  <img
                    src={importImage(logoAssets[activeLogoIndex].file)}
                    alt={logoAssets[activeLogoIndex].title}
                    className="max-h-56 max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 transform hover:scale-105"
                  />
                  <div className="mt-4 text-center">
                    <span className="font-mono text-[11px] text-[#D69103]">
                      {logoAssets[activeLogoIndex].dimensions.width} × {logoAssets[activeLogoIndex].dimensions.height} px
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D69103]/20 border border-[#D69103]/40 text-[#D69103] font-cormorant-sc text-xs tracking-widest uppercase mb-3 w-fit">
                    Varian {activeLogoIndex + 1} dari {logoAssets.length}
                  </div>
                  <h3 className="font-mileast font-bold text-2xl sm:text-3xl text-white mb-1">
                    {logoAssets[activeLogoIndex].title}
                  </h3>
                  <p className="font-cormorant-sc text-xs tracking-widest text-[#D69103] uppercase mb-4 font-semibold">
                    {logoAssets[activeLogoIndex].subtitle}
                  </p>
                  <p className="font-baskerville text-sm text-[#F4F1EB]/85 leading-relaxed mb-6">
                    {logoAssets[activeLogoIndex].description}
                  </p>

                  {/* Thumbnail Switcher */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {logoAssets.map((logo, idx) => (
                      <button
                        key={logo.id}
                        onClick={() => setActiveLogoIndex(idx)}
                        className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                          idx === activeLogoIndex
                            ? 'border-[#D69103] bg-[#D69103]/25 scale-105 shadow-md'
                            : 'border-white/20 bg-white/5 opacity-60 hover:opacity-100'
                        }`}
                        title={logo.title}
                      >
                        <img
                          src={importImage(logo.file)}
                          alt={logo.title}
                          className="h-9 w-12 object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Large Hero Banners & Architectural Concepts */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <section className="space-y-8">
            <div className="flex flex-col items-center text-center">
              <SectionLabel text="MAHAKARYA ARSITEKTUR & POSTER" />
              <h2 className="font-mileast italic font-bold text-3xl sm:text-4xl text-[#062B4A] mt-2">
                Panggung Teatrikal & Visual Utama
              </h2>
              <FleuronDivider />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Building Masterpiece */}
              {buildingAsset && (
                <div className="group rounded-2xl overflow-hidden border border-[#D69103]/40 bg-white shadow-lg flex flex-col transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#062B4A]">
                    <img
                      src={importImage(buildingAsset.file)}
                      alt={buildingAsset.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B4A]/90 via-[#062B4A]/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#062B4A]/80 border border-[#D69103] text-[10px] font-cormorant-sc tracking-widest text-[#D69103] uppercase">
                      ARSITEKTUR & BACKGROUND
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-mileast font-bold text-xl text-[#062B4A] mb-1">
                        {buildingAsset.title}
                      </h3>
                      <p className="font-cormorant-sc text-xs text-[#D69103] tracking-widest uppercase mb-3 font-semibold">
                        {buildingAsset.subtitle}
                      </p>
                      <p className="font-baskerville text-xs text-[#062B4A]/80 leading-relaxed mb-4">
                        {buildingAsset.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#062B4A]/10 flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[#062B4A]/60">
                        {buildingAsset.dimensions.width} × {buildingAsset.dimensions.height} px
                      </span>
                      <button
                        onClick={() => setSelectedAssetForModal(buildingAsset)}
                        className="font-cormorant-sc text-[#D69103] hover:text-[#062B4A] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> Pratinjau
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Assets 1 Master Poster */}
              {assets1Asset && (
                <div className="group rounded-2xl overflow-hidden border border-[#D69103]/40 bg-white shadow-lg flex flex-col transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#062B4A]">
                    <img
                      src={importImage(assets1Asset.file)}
                      alt={assets1Asset.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B4A]/90 via-[#062B4A]/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#062B4A]/80 border border-[#D69103] text-[10px] font-cormorant-sc tracking-widest text-[#D69103] uppercase">
                      GRAFIS MASTER UTAMA
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-mileast font-bold text-xl text-[#062B4A] mb-1">
                        {assets1Asset.title}
                      </h3>
                      <p className="font-cormorant-sc text-xs text-[#D69103] tracking-widest uppercase mb-3 font-semibold">
                        {assets1Asset.subtitle}
                      </p>
                      <p className="font-baskerville text-xs text-[#062B4A]/80 leading-relaxed mb-4">
                        {assets1Asset.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#062B4A]/10 flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[#062B4A]/60">
                        {assets1Asset.dimensions.width} × {assets1Asset.dimensions.height} px
                      </span>
                      <button
                        onClick={() => setSelectedAssetForModal(assets1Asset)}
                        className="font-cormorant-sc text-[#D69103] hover:text-[#062B4A] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> Pratinjau
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Photo Gallery with photo 1 & photo 2 */}
            <div className="pt-6">
              <h3 className="font-mileast italic font-bold text-2xl text-[#062B4A] mb-4 text-center">
                Dokumentasi Dinamika & Kreasi Santri
              </h3>
              <PhotoGallery categoryFilter="photo" />
            </div>
          </section>
        )}

        {/* Section 3: Typography Art Archive (typography.png through typography 6.png) */}
        {(activeTab === 'all' || activeTab === 'typography') && (
          <section className="space-y-8">
            <div className="flex flex-col items-center text-center">
              <SectionLabel text="ARSIP LENGKAP KALIGRAFI & HURUF" />
              <h2 className="font-mileast italic font-bold text-3xl sm:text-4xl text-[#062B4A] mt-2">
                Galeri Tipografi & Ornamen Emas
              </h2>
              <FleuronDivider />
              <p className="font-baskerville text-xs sm:text-sm text-[#062B4A]/80 max-w-xl">
                Enam karya seni huruf otentik yang menghiasi setiap ornamen prangko, piagam kemitraan, dan buku panduan acara Drama Arena 5102.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {typographyAssets.map((typo) => (
                <div
                  key={typo.id}
                  onClick={() => setSelectedAssetForModal(typo)}
                  className="group relative rounded-xl overflow-hidden border border-[#D69103]/30 bg-gradient-to-b from-[#FBF9F5] to-[#F1EDE4] p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-video sm:aspect-square flex items-center justify-center p-4 bg-[#062B4A]/5 rounded-lg border border-[#062B4A]/10 mb-4 overflow-hidden group-hover:bg-[#062B4A]/10 transition-colors">
                    <img
                      src={importImage(typo.file)}
                      alt={typo.title}
                      className="max-h-full max-w-full object-contain filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-[#062B4A] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D69103]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mileast font-bold text-base text-[#062B4A] group-hover:text-[#D69103] transition-colors leading-snug">
                      {typo.title}
                    </h3>
                    <p className="font-cormorant-sc text-[11px] text-[#D69103] tracking-widest uppercase mb-2 font-semibold">
                      {typo.subtitle}
                    </p>
                    <p className="font-baskerville text-xs text-[#062B4A]/70 line-clamp-2 leading-relaxed mb-3">
                      {typo.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#062B4A]/50 border-t border-[#062B4A]/10 pt-2">
                      <span>{typo.name}</span>
                      <span>{typo.dimensions.width}×{typo.dimensions.height}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Official Uniform / Merchandise (workshirt.png) */}
        {(activeTab === 'all' || activeTab === 'merchandise') && merchandiseAsset && (
          <section
            className="rounded-2xl p-6 sm:p-10 border border-[#D69103]/40 shadow-xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, #062B4A 0%, #031c33 100%)',
              color: '#F4F1EB',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex items-center justify-center p-6 bg-[#021323] rounded-xl border border-[#D69103]/30">
                <img
                  src={importImage(merchandiseAsset.file)}
                  alt={merchandiseAsset.title}
                  className="max-h-96 max-w-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D69103]/20 border border-[#D69103]/40 text-[#D69103] font-cormorant-sc text-xs tracking-widest uppercase mb-3 w-fit">
                  ✦ SERAGAM RESMI KEPANITIAAN ✦
                </div>
                <h2 className="font-mileast italic font-bold text-3xl sm:text-4xl text-white mb-2">
                  {merchandiseAsset.title}
                </h2>
                <p className="font-cormorant-sc text-xs tracking-widest text-[#D69103] uppercase mb-4 font-semibold">
                  {merchandiseAsset.subtitle}
                </p>
                <p className="font-baskerville text-sm text-[#F4F1EB]/85 leading-relaxed mb-6">
                  {merchandiseAsset.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-cormorant-sc text-[#D69103] block uppercase tracking-wider font-bold mb-1">
                      Spesifikasi Bahan
                    </span>
                    <span className="text-[#F4F1EB]/80 font-baskerville">
                      American Drill Premium Navy dengan bordir komputer benang emas anti-luntur.
                    </span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-cormorant-sc text-[#D69103] block uppercase tracking-wider font-bold mb-1">
                      Aplikasi Lambang
                    </span>
                    <span className="text-[#F4F1EB]/80 font-baskerville">
                      Bordir dada kiri monogram DA, lengan kanan bendera Merah Putih & logo 5102.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <GoldButton
                    onClick={onOpenSponsorshipModal}
                    label="KEMITRAAN & SPONSORSHIP"
                  />
                  <button
                    onClick={() => setSelectedAssetForModal(merchandiseAsset)}
                    className="px-6 py-3 rounded border border-[#D69103] text-[#D69103] hover:bg-[#D69103] hover:text-[#062B4A] transition-colors font-cormorant-sc text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    Lihat Detail Resolusi Tinggi
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Global Lightbox Inspect Modal */}
      {selectedAssetForModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedAssetForModal(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#062B4A] border-2 border-[#D69103] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D69103]/30 bg-[#031c33]">
              <div>
                <span className="font-cormorant-sc text-xs tracking-widest text-[#D69103] uppercase">
                  {selectedAssetForModal.category.toUpperCase()} • {selectedAssetForModal.name}
                </span>
                <h3 className="font-mileast font-bold text-xl text-[#F4F1EB] mt-0.5">
                  {selectedAssetForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAssetForModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D69103] text-white hover:text-[#062B4A] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative flex-1 overflow-auto bg-[#021323] p-6 flex items-center justify-center min-h-[300px] max-h-[65vh]">
              <img
                src={importImage(selectedAssetForModal.file)}
                alt={selectedAssetForModal.title}
                className="max-w-full max-h-full object-contain rounded"
              />
            </div>

            <div className="px-6 py-4 border-t border-[#D69103]/30 bg-[#031c33] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#F4F1EB]/80">
              <div>
                <p className="font-baskerville leading-relaxed">
                  {selectedAssetForModal.description}
                </p>
                <span className="font-cormorant-sc text-[#D69103] text-[11px] block mt-1">
                  Dimensi Asli: {selectedAssetForModal.dimensions.width} × {selectedAssetForModal.dimensions.height} px
                </span>
              </div>
              <a
                href={importImage(selectedAssetForModal.file)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded border border-[#D69103] text-[#D69103] hover:bg-[#D69103] hover:text-[#062B4A] transition-colors font-cormorant-sc uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Buka di Tab Baru
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
