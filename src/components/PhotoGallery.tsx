import React, { useState } from 'react';
import { importImage, importRef, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
import { Maximize2, X, ZoomIn, Info, Eye } from 'lucide-react';

interface PhotoGalleryProps {
  categoryFilter?: 'all' | 'photo' | 'graphic' | 'merchandise';
  onSelectAsset?: (asset: DAAsset) => void;
  className?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  categoryFilter = 'all',
  className = '',
}) => {
  const [selectedAsset, setSelectedAsset] = useState<DAAsset | null>(null);

  const galleryItems = ALL_ASSETS.filter((item) => {
    if (categoryFilter === 'all') {
      return item.category === 'photo' || item.id === 'assets-1' || item.id === 'merch-workshirt';
    }
    return item.category === categoryFilter;
  });

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {galleryItems.map((item) => {
          const imgUrl = item.category === 'guideline'
            ? importRef(item.name)
            : importImage(item.name);
          return (
            <div
              key={item.id}
              onClick={() => setSelectedAsset(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#FAF8F5] border border-[#B58A3C]/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#192E41]/10 flex items-center justify-center">
                <img
                  src={imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#192E41]/90 via-[#192E41]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Corner Stamp Marks */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#192E41]/85 border border-[#B58A3C]/60 text-[10px] font-cormorant-sc tracking-widest text-[#B58A3C] uppercase font-bold">
                  {item.category.toUpperCase()}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#192E41]/70 text-[#EDE8E2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-[#B58A3C]/40 hover:bg-[#B58A3C] hover:text-[#192E41]">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 bg-gradient-to-b from-[#FAF8F5] to-[#EDE8E2] border-t border-[#B58A3C]/20">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-mileast font-bold text-lg text-[#192E41] group-hover:text-[#B58A3C] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <Eye className="w-4 h-4 text-[#B58A3C] opacity-60 group-hover:opacity-100 flex-shrink-0 mt-1" />
                </div>
                <p className="font-cormorant-sc text-xs text-[#325956] tracking-wider uppercase mb-2 font-bold">
                  {item.subtitle}
                </p>
                <p className="font-alverata text-xs text-[#192E41]/75 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#192E41]/50 border-t border-[#192E41]/10 pt-2">
                  <span>{item.name}</span>
                  <span>{item.dimensions.width} × {item.dimensions.height} px</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#192E41] border-2 border-[#B58A3C] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#B58A3C]/30 bg-[#101D2A]">
              <div>
                <span className="font-cormorant-sc text-xs tracking-widest text-[#B58A3C] uppercase font-bold">
                  ✦ {selectedAsset.category.toUpperCase()} DOKUMENTASI ✦
                </span>
                <h3 className="font-mileast font-bold text-xl text-[#EDE8E2] mt-0.5">
                  {selectedAsset.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#B58A3C] text-white hover:text-[#192E41] transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 overflow-auto bg-[#0B151F] p-4 flex items-center justify-center min-h-[300px] max-h-[65vh]">
              <img
                src={selectedAsset.category === 'guideline' ? importRef(selectedAsset.name) : importImage(selectedAsset.name)}
                alt={selectedAsset.title}
                className="max-w-full max-h-full object-contain rounded shadow-lg"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 border-t border-[#B58A3C]/30 bg-[#101D2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#EDE8E2]/85">
              <div className="max-w-xl">
                <p className="font-alverata leading-relaxed">
                  {selectedAsset.description}
                </p>
                <span className="font-cormorant-sc text-[#B58A3C] tracking-widest text-[11px] block mt-1 font-bold">
                  File: {selectedAsset.name} • Resolusi: {selectedAsset.dimensions.width}×{selectedAsset.dimensions.height} px
                </span>
              </div>
              <a
                href={selectedAsset.category === 'guideline' ? importRef(selectedAsset.name) : importImage(selectedAsset.name)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded border border-[#B58A3C] text-[#B58A3C] hover:bg-[#B58A3C] hover:text-[#192E41] transition-colors font-cormorant-sc tracking-wider uppercase font-bold flex items-center gap-1.5 flex-shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Lihat Ukuran Penuh
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PhotoGallery;
