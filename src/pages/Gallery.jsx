import React, { useState, useMemo } from 'react';
import { 
  Image as ImageIcon, Filter, Sparkles, Eye, Download, 
  ChevronRight, ArrowRight 
} from 'lucide-react';
import { galleryImages } from '../data/galleryData';

export default function Gallery({ openLightbox }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = [
    'All',
    'Spandana & Education',
    'Medical & Health Camps',
    'IRHM & Harmony',
    'HRDC & Leadership',
    'Celebrations & Gatherings'
  ];

  const filteredPhotos = useMemo(() => {
    if (selectedCat === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === selectedCat);
  }, [selectedCat]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" /> Authentic Visual Archive
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
            Photo Gallery
          </h1>
          <p className="text-amber-100/90 text-lg sm:text-xl max-w-3xl font-serif">
            Witness our moments of joy, education, service, and inter-faith fraternity in action.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 flex-wrap bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCat === cat
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          <div className="text-xs text-slate-500 font-semibold">
            Displaying {filteredPhotos.length} photographs
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(item.src, item.title, item.category)}
                className="group relative h-52 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/uploads/2020/07/ashirvadj-1-1.png';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-white capitalize mt-0.5 truncate">
                    {item.title}
                  </span>
                  <div className="pt-2 flex items-center gap-1 text-[11px] text-amber-200">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
