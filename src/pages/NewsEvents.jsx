import React, { useState, useEffect } from 'react';
import { 
  Calendar, Search, Filter, Sparkles, MapPin, 
  ChevronRight, Eye, Image as ImageIcon, BookOpen, Heart,
  Tag, Compass, ArrowUpRight, Loader2
} from 'lucide-react';
import { API_BASE } from '../config/api';

export default function NewsEvents({ openLightbox, initialYear, onYearChange }) {
  const [yearTabs, setYearTabs] = useState([]);
  const [selectedYear, setSelectedYear] = useState(initialYear || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  // ── Fetch available years from PHP API on mount ──────────────────
  useEffect(() => {
    fetch(`${API_BASE}/years`)
      .then(r => r.json())
      .then(json => {
        if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
          setYearTabs(json.data);
          if (!selectedYear && !initialYear) {
            setSelectedYear(json.data[0]);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to fetch years from API:', err);
        setYearTabs([]);
      });
  }, [initialYear, selectedYear]);

  // ── Sync year when parent prop changes ───────────────────────────
  useEffect(() => {
    if (initialYear && initialYear !== 'All') {
      setSelectedYear(initialYear);
    }
  }, [initialYear]);

  // ── Fetch events from PHP API for the selected year ───────────────
  useEffect(() => {
    if (!selectedYear) {
      setLoading(false);
      setEvents([]);
      return;
    }

    setLoading(true);
    setApiError(false);

    fetch(`${API_BASE}/events?year=${selectedYear}`)
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(json => {
        if (json.status === 'success' && Array.isArray(json.data)) {
          setEvents(json.data);
          setApiError(false);
        } else {
          setEvents([]);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch events from API:', err);
        setEvents([]);
        setApiError(true);
      })
      .finally(() => setLoading(false));
  }, [selectedYear]);

  const handleYearSelect = (y) => {
    setSelectedYear(y);
    setSearchQuery('');
    if (onYearChange) {
      onYearChange(y);
    }
  };

  const filteredEvents = events.filter((item) => {
    const query = searchQuery.toLowerCase();
    const plainDesc = (item.description || '').replace(/<[^>]*>/g, ' ').toLowerCase();
    return (
      !searchQuery ||
      item.title?.toLowerCase().includes(query) ||
      plainDesc.includes(query) ||
      item.date?.toLowerCase().includes(query) ||
      (item.sideLabel && item.sideLabel.toLowerCase().includes(query))
    );
  });

  return (
    <div className="bg-[#090E17] text-slate-100 min-h-screen pb-16">
      
      {/* 1. Compact Sticky Year Archive Sub-Bar (Aligned flush beneath navbar) */}
      <section className="bg-[#0D1826] border-b border-slate-800 sticky top-[90px] sm:top-[106px] z-40 shadow-xl backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          
          {/* Year Archive Switcher */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-widest mr-1">
              ARCHIVE:
            </span>
            {yearTabs.map((y) => (
              <button
                key={y}
                onClick={() => handleYearSelect(y)}
                className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedYear === y 
                    ? 'bg-amber-500 text-slate-950 shadow font-extrabold scale-105' 
                    : 'bg-[#142336] text-slate-300 hover:bg-[#1C314C] hover:text-white border border-slate-700/60'
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-amber-400/70 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={selectedYear ? `Search ${selectedYear} events...` : 'Search events...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 text-xs bg-[#142336] border border-slate-700/80 text-white rounded-full focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Events Feed */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-5 space-y-8">

        {/* Loading spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              Loading {selectedYear} Events…
            </p>
          </div>
        )}

        {!loading && filteredEvents.length === 0 ? (
          <div className="bg-[#0E1724] p-10 text-center rounded-xl border border-slate-800 space-y-3 shadow-lg my-6">
            <Calendar className="w-8 h-8 text-amber-400 mx-auto opacity-80" />
            <h3 className="text-lg font-serif font-bold text-white">No Events Found</h3>
            <p className="text-slate-400 text-xs">
              {searchQuery ? `No matches found for "${searchQuery}".` : (selectedYear ? `No events found for ${selectedYear}.` : 'No events available.')}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 underline uppercase tracking-wider cursor-pointer"
              >
                Clear search filter
              </button>
            )}
          </div>
        ) : !loading && (

          filteredEvents.map((ev, index) => {
            const prevEvent = index > 0 ? filteredEvents[index - 1] : null;
            const showMonthBanner = !prevEvent || prevEvent.monthHeader !== ev.monthHeader;

            return (
              <div key={ev.id} className="space-y-3 animate-fade-in">
                
                {/* Sleek Compact Month Header */}
                {showMonthBanner && (
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-amber-500/40"></div>
                    <div className="inline-flex items-center gap-2 bg-[#0D2A45] border border-amber-500/30 px-4 py-1.5 rounded-lg shadow">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <h2 className="font-serif text-sm sm:text-base font-extrabold tracking-[0.2em] text-white uppercase">
                        {ev.monthHeader || `${selectedYear}`}
                      </h2>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-amber-500/40"></div>
                  </div>
                )}

                {/* Compact Event Card */}
                <div className="bg-[#0E1724] border border-slate-800 rounded-xl overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-200 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    {/* 1. Left Vertical Label Ribbon (Compact Width) */}
                    <div className="hidden lg:flex lg:col-span-1 bg-[#090F18] border-r border-slate-800/90 items-center justify-center py-4 px-1 select-none">
                      <span 
                        className="text-amber-400/90 text-[10px] font-extrabold uppercase tracking-[0.3em] whitespace-nowrap"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)'
                        }}
                      >
                        {ev.sideLabel || 'ACTIVITY SESSION'}
                      </span>
                    </div>

                    {/* 2. Main Article & Featured Image Column (Compact Padding & Clean Typography) */}
                    <div className="lg:col-span-6 p-4 sm:p-5 space-y-3.5 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
                      <div className="space-y-3">
                        
                        {/* Primary Featured Image */}
                        {ev.featuredImage && (
                          <div 
                            className="rounded-lg overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer group/img relative shadow"
                            onClick={() => openLightbox(ev.featuredImage, ev.title, ev.date)}
                          >
                            <img
                              src={ev.featuredImage}
                              alt={ev.title}
                              className="w-full h-44 sm:h-56 object-cover group-hover/img:scale-103 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = '/uploads/2025/09/DSC_5557-scaled.jpg';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                              <span className="text-white text-[11px] font-bold flex items-center gap-1 bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20">
                                <Eye className="w-3 h-3 text-amber-400" /> Click to enlarge
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Date Tag */}
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider font-serif">
                            <Calendar className="w-3 h-3 text-amber-400" />
                            <span>{ev.date}</span>
                          </span>
                        </div>

                        {/* Article Title */}
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug tracking-tight group-hover:text-amber-200 transition-colors">
                          {ev.title}
                        </h3>

                        {/* Narrative Description (CKEditor Rich Text Support) */}
                        <div 
                          className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-light line-clamp-6 [&_p]:mb-1.5 [&_p:last-child]:mb-0 [&_span]:inline [&_a]:text-amber-400 [&_a]:underline"
                          dangerouslySetInnerHTML={{ __html: ev.description || '' }}
                        />
                      </div>

                      {/* Article Footer Meta */}
                      <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1 text-slate-300">
                          <Compass className="w-3 h-3 text-amber-400" />
                          <span>Ashirvad Social Mission</span>
                        </span>
                        <button
                          onClick={() => openLightbox(ev.featuredImage, ev.title, ev.date)}
                          className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Enlarge</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* 3. Right Photo Gallery Column (Compact Grid) */}
                    <div className="lg:col-span-5 p-4 sm:p-5 bg-[#0B121C] flex flex-col justify-between">
                      <div>
                        {/* Gallery Header */}
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                            <span>Photo Gallery ({ev.galleryImages ? ev.galleryImages.length : 0})</span>
                          </span>
                          <span className="text-[10px] text-slate-400">Click to preview</span>
                        </div>

                        {/* 2-Column Photo Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                          {ev.galleryImages && ev.galleryImages.length > 0 ? (
                            ev.galleryImages.slice(0, 6).map((gImg, gIdx) => (
                              <div
                                key={gIdx}
                                onClick={() => openLightbox(gImg, ev.title, `${ev.date} • Photo ${gIdx + 1}`)}
                                className="group/g relative h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 cursor-pointer shadow hover:border-amber-400 transition-all"
                              >
                                <img
                                  src={gImg}
                                  alt={`${ev.title} - ${gIdx + 1}`}
                                  className="w-full h-full object-cover group-hover/g:scale-108 transition-transform duration-300"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/g:opacity-100 transition-opacity flex items-center justify-center">
                                  <Eye className="w-4 h-4 text-white drop-shadow" />
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-2 flex flex-col items-center justify-center p-6 text-slate-400 text-xs text-center space-y-1 border border-dashed border-slate-800 rounded-lg">
                              <ImageIcon className="w-6 h-6 text-slate-600 mb-1" />
                              <span className="text-[11px]">Primary event photo shown on left</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Additional Photos Expand */}
                      {ev.galleryImages && ev.galleryImages.length > 6 && (
                        <div className="pt-2.5 text-right">
                          <button
                            onClick={() => openLightbox(ev.galleryImages[6], ev.title, `${ev.date} • Additional Photos`)}
                            className="text-[11px] text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 cursor-pointer bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20"
                          >
                            <span>+ View {ev.galleryImages.length - 6} more photos</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
