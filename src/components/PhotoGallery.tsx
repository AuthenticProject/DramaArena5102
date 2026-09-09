import React, { useState } from 'react';
import { importImage, ALL_ASSETS, type DAAsset } from '../utils/assetHelpers';
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
      return item.category === 'photo' || item.id === 'assets-1' || item.id === 'workshirt';
    }
    return item.category === categoryFilter;
  });

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {galleryItems.map((item) => {
          const imgUrl = importImage(item.file);
          return (
            <div
              key={item.id}
              onClick={() => setSelectedAsset(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#062B4A]/5 border border-[#D69103]/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              style={{
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#062B4A]/10 flex items-center justify-center">
                <img
                  src={imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B4A]/90 via-[#062B4A]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Corner Stamp Marks */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#062B4A]/80 border border-[#D69103]/60 text-[10px] font-cormorant-sc tracking-widest text-[#D69103] uppercase">
                  {item.category.toUpperCase()}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#062B4A]/70 text-[#F4F1EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-[#D69103]/40 hover:bg-[#D69103] hover:text-[#062B4A]">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 bg-gradient-to-b from-[#FBF9F5] to-[#F4F1EB] border-t border-[#D69103]/20">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-mileast font-bold text-lg text-[#062B4A] group-hover:text-[#D69103] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <Eye className="w-4 h-4 text-[#D69103] opacity-60 group-hover:opacity-100 flex-shrink-0 mt-1" />
                </div>
                <p className="font-cormorant-sc text-xs text-[#D69103] tracking-wider uppercase mb-2 font-semibold">
                  {item.subtitle}
                </p>
                <p className="font-baskerville text-xs text-[#062B4A]/75 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#062B4A]/50 border-t border-[#062B4A]/10 pt-2">
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
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#062B4A] border-2 border-[#D69103] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D69103]/30 bg-[#031c33]/90">
              <div>
                <span className="font-cormorant-sc text-xs tracking-widest text-[#D69103] uppercase">
                  ✦ {selectedAsset.category.toUpperCase()} DOKUMENTASI ✦
                </span>
                <h3 className="font-mileast font-bold text-xl text-[#F4F1EB] mt-0.5">
                  {selectedAsset.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D69103] text-white hover:text-[#062B4A] transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 overflow-auto bg-[#021323] p-4 flex items-center justify-center min-h-[300px] max-h-[65vh]">
              <img
                src={importImage(selectedAsset.file)}
                alt={selectedAsset.title}
                className="max-w-full max-h-full object-contain rounded shadow-lg"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 border-t border-[#D69103]/30 bg-[#031c33]/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#F4F1EB]/80">
              <div className="max-w-xl">
                <p className="font-baskerville leading-relaxed">
                  {selectedAsset.description}
                </p>
                <span className="font-cormorant-sc text-[#D69103] tracking-widest text-[11px] block mt-1">
                  File: {selectedAsset.file} • Resolusi: {selectedAsset.dimensions.width}×{selectedAsset.dimensions.height}
                </span>
              </div>
              <a
                href={importImage(selectedAsset.file)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded border border-[#D69103] text-[#D69103] hover:bg-[#D69103] hover:text-[#062B4A] transition-colors font-cormorant-sc tracking-wider uppercase flex items-center gap-1.5 flex-shrink-0"
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
