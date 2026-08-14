import React from 'react';
import { 
  ArrowRight, Sparkles, Heart, Users, Compass, 
  BookOpen, Building, ShieldCheck, ChevronRight, Eye 
} from 'lucide-react';

export default function Services({ setCurrentRoute, openLightbox }) {
  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-50 min-h-screen text-slate-900 pb-20">
      
      {/* 1. Header Hero Section (Compact Minimal Spacing) */}
      <section className="bg-[#0D2A45] text-white py-6 sm:py-8 px-4 sm:px-6 relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto space-y-2 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-amber-300 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>ASHIRVAD APOSTOLATES</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Our Services & Ministries
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Rooted in the charism of Karnataka Jesuits, Ashirvad works through three dedicated pillars to accompany the marginalized, foster inter-religious peace, and form transformative leaders.
          </p>
        </div>
      </section>

      {/* 2. Main 3-Column Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          
          {/* COLUMN 1: HRDC */}
          <div className="flex flex-col gap-6 group">
            {/* Top Photo */}
            <div 
              onClick={() => navigateTo('hrdc')}
              className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md border border-slate-200 cursor-pointer relative group/img"
            >
              <img 
                src="/uploads/2020/04/DSC_4706-2-scaled-1-840x560.jpg" 
                alt="Ashirvad HRDC Centre"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/uploads/2020/04/DSC_4706-2-scaled-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1 bg-[#0D2A45]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-amber-400" /> View HRDC Formation
                </span>
              </div>
            </div>

            {/* Bottom Card */}
            <div 
              onClick={() => navigateTo('hrdc')}
              className="bg-white border border-slate-200/90 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between flex-grow cursor-pointer"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    Human Resource
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">01</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  HRDC
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We facilitate events and leadership training meetings organised for the welfare of the poor and marginalised. Equipped with magnificent conference halls, JESCOL collaborator formations, and clergy renewal courses.
                </p>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">JESCOL</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Laity Formation</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Clergy Seminars</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0D2A45] group-hover:text-amber-600 transition-colors flex items-center gap-1">
                  <span>Explore HRDC</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>

          {/* COLUMN 2: Social Concern (CSC) */}
          <div className="flex flex-col gap-6 group">
            {/* Top Card */}
            <div 
              onClick={() => navigateTo('csc')}
              className="bg-white border border-slate-200/90 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between flex-grow cursor-pointer"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    Social Concern
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">02</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  Social Concern (CSC)
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reaching out to the most vulnerable and marginalised communities to offer them a ray of hope in a multi-dimensional way. Operating Spandana evening study centres in slums and the MAIN migrant support network.
                </p>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Spandana Centres</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">MAIN Migrant Network</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Slum Education</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0D2A45] group-hover:text-amber-600 transition-colors flex items-center gap-1">
                  <span>Explore Social Concern</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>

            {/* Bottom Photo */}
            <div 
              onClick={() => navigateTo('csc')}
              className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md border border-slate-200 cursor-pointer relative group/img"
            >
              <img 
                src="/uploads/2020/04/Untitled-design-11-1024x727-1-1-890x664.jpg" 
                alt="Social Concern Holding Hands"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/uploads/2025/09/DSC_3027-650x572.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1 bg-[#0D2A45]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-amber-400" /> View Spandana Mission
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: IRHM */}
          <div className="flex flex-col gap-6 group">
            {/* Top Photo */}
            <div 
              onClick={() => navigateTo('irhm')}
              className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md border border-slate-200 cursor-pointer relative group/img"
            >
              <img 
                src="/uploads/2020/04/Head-Slider-Ashirvad-1-1024x727-1-1-890x664.jpg" 
                alt="IRHM Interfaith Unity"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/uploads/2025/09/IRHM-1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1 bg-[#0D2A45]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-amber-400" /> View IRHM Golden Jubilee
                </span>
              </div>
            </div>

            {/* Bottom Card */}
            <div 
              onClick={() => navigateTo('irhm')}
              className="bg-white border border-slate-200/90 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between flex-grow cursor-pointer"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    Harmony & Dialogue
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">03</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  IRHM
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  IRHM is to spread communal harmony within our society and to remove extreme religious fanaticism. Monthly dialogue meetings, inter-faith celebrations, and retreats uniting citizens of all faiths since 1973.
                </p>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Monthly Dialogue</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Golden Jubilee</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">Interfaith Retreats</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0D2A45] group-hover:text-amber-600 transition-colors flex items-center gap-1">
                  <span>Explore IRHM</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Callout Banner */}
        <div className="mt-16 bg-[#0D2A45] rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Looking to Book our Conference Facilities?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
              We provide 7 well-equipped meeting and seminar halls, quiet residential rooms, dining amenities, and AV support for charitable, educational, and welfare gatherings.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Contact Centre</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
