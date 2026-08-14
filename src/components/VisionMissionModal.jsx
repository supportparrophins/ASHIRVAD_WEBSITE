import React, { useEffect } from 'react';
import { X, Sparkles, Heart, Compass, ShieldCheck, ArrowRight, Building, Check } from 'lucide-react';

export default function VisionMissionModal({ isOpen, onClose, data }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Dialog Card (Click propagation stopped inside) */}
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[88vh] animate-slide-up z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0D2A45] text-white px-6 py-4 flex items-center justify-between border-b border-slate-700 select-none">
          <div className="flex items-center gap-2.5">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider shadow-sm">
              {data.tag || 'ASHIRVAD'}
            </span>
            <span className="text-xs text-amber-200 font-semibold hidden sm:inline-block">
              {data.subtitle || 'Karnataka Jesuits Initiative'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-5 text-slate-800">
          {/* Main Image (Full Visibility without cropping) */}
          {data.image && (
            <div className="rounded-xl overflow-hidden bg-slate-950/5 border border-slate-200 flex items-center justify-center p-1">
              <img
                src={data.image}
                alt={data.title}
                className="w-full max-h-64 sm:max-h-80 object-contain rounded-lg shadow-sm"
              />
            </div>
          )}

          {/* Title */}
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {data.title}
            </h2>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              {data.subtitle}
            </p>
          </div>

          {/* Core Quote Box */}
          <div className="bg-amber-50/90 border-l-4 border-[#0D2A45] p-4 rounded-r-xl">
            <p className="text-xs sm:text-sm font-serif italic text-slate-900 leading-relaxed">
              "{data.quote}"
            </p>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {data.description}
          </div>

          {/* Points / Highlights if available */}
          {data.points && data.points.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Key Dimensions & Focus:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {data.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0D2A45] font-extrabold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between select-none">
          <span className="text-[11px] text-slate-500 font-medium">Ashirvad • Bengaluru</span>
          <button
            onClick={onClose}
            className="bg-[#0D2A45] hover:bg-[#133A61] text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
