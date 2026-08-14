import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, currentImage, onNext, onPrev, title, subtitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors border border-slate-700/50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white transition-all border border-slate-700/50 shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white transition-all border border-slate-700/50 shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-slate-800 bg-slate-900 flex items-center justify-center">
          <img
            src={currentImage}
            alt={title || 'Ashirvad Gallery'}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg transition-all duration-300"
            onError={(e) => {
              e.target.src = '/uploads/2020/07/ashirvadj-1-1.png';
            }}
          />
        </div>

        {/* Caption */}
        {(title || subtitle) && (
          <div className="mt-3 text-center px-4 max-w-2xl">
            {title && <h4 className="text-white text-sm sm:text-base font-bold capitalize">{title}</h4>}
            {subtitle && <p className="text-slate-400 text-xs mt-0.5">{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
