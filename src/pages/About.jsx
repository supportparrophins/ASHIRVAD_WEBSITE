import React from 'react';
import { 
  History, Sparkles, Heart, Compass, ShieldCheck, 
  ArrowRight, Users, Building, BookOpen, ChevronRight, Play, Eye
} from 'lucide-react';

export default function About({ setCurrentRoute, openSupportModal }) {
  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-50 text-slate-900 min-h-screen pb-16">
      
      {/* 1. Hero Header Section (Compact Minimal Spacing) */}
      <section className="bg-[#0D2A45] text-white py-6 sm:py-8 px-4 sm:px-6 relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto space-y-2 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-amber-300 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/15">
            <History className="w-3 h-3 text-amber-400" />
            <span>FOUNDED IN 1973 • 50+ YEARS LEGACY</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            About Ashirvad
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            A Jesuit Centre for Social Research, Grassroots Education & Inter-Religious Harmony in the heart of Bengaluru.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 pt-6 sm:pt-8">
        
        {/* 2. Featured Video Embed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-800">
              <Play className="w-4 h-4 text-[#0D2A45] fill-[#0D2A45]" />
              <span className="font-serif font-bold text-sm sm:text-base">
                Documentary: Karnataka Jesuit Mission 2025
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">Official Province Film</span>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/6PHegSsR5pA?si=xzh_6MHkSNrQZMJc"
                title="YouTube video player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 3. Story, Founder & Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-widest block">
                OUR HERITAGE & MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
                A Beacon of Blessing in Bengaluru
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Ashirvad is situated in the heart of the city of Bengaluru. True to its name, Ashirvad has been a blessing to the city through its various inter-religious, educational, and social initiatives since 1973.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Initiated by the late <strong className="text-slate-900">Rev. Fr. Ronnie Prabhu, SJ</strong>, the centre was created to foster inter-faith dialogue, promote communal harmony, and accompany the most vulnerable and marginalized communities across Karnataka.
            </p>

            {/* Vision Callout Box */}
            <div className="bg-white border-l-4 border-[#0D2A45] p-5 rounded-r-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0D2A45]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="font-serif text-base font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "Reconciliation and service, with people of goodwill to transform relationships and structures in society."
              </p>
            </div>

            {/* Mission Callout Box */}
            <div className="bg-white border-l-4 border-amber-500 p-5 rounded-r-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-600">
                <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
                <h3 className="font-serif text-base font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "Rooted in compassion, social justice, reconciliation and service, with people of goodwill to transform relationships and structures in society."
              </p>
            </div>
          </div>

          {/* Key Dimensions Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Core Apostolates</span>
                <Compass className="w-5 h-5 text-amber-500" />
              </h3>

              <div className="space-y-4">
                <div 
                  onClick={() => navigateTo('irhm')}
                  className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0D2A45] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors flex items-center gap-1">
                      <span>Inter-Religious Harmony (IRHM)</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Regular monthly inter-faith dialogue meetings and retreats uniting people of all religions.
                    </p>
                  </div>
                </div>

                <div 
                  onClick={() => navigateTo('csc')}
                  className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0D2A45] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors flex items-center gap-1">
                      <span>Social Concern & Education (CSC)</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Spandana study centres for slum and migrant children, stationery, and MAIN migrant network.
                    </p>
                  </div>
                </div>

                <div 
                  onClick={() => navigateTo('hrdc')}
                  className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0D2A45] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors flex items-center gap-1">
                      <span>Human Resource Development (HRDC)</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      JESCOL leadership formation, training for priests and religious, and laity formation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full bg-[#0D2A45] hover:bg-[#133A61] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Contact Ashirvad</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4. Jesuit Community Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>LEADERSHIP & COMMUNITY</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                The Jesuit Community at Ashirvad
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Ashirvad is home to a resident community of Jesuit fathers who guide the spiritual, educational, and social apostolates of the Karnataka Province:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-stone-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block">Fr. Arun Luis, SJ</span>
                  <span className="text-xs text-amber-600 font-medium">Superior & Director</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block">Fr. Jerald D’Souza, SJ</span>
                  <span className="text-xs text-slate-600 font-medium">Community Member</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block">Fr. Anthony Arul, SJ</span>
                  <span className="text-xs text-slate-600 font-medium">Community Member</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 text-sm block">Fr. Joseph Xavier, SJ</span>
                  <span className="text-xs text-slate-600 font-medium">Community Member</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
                <img
                  src="/uploads/2025/09/DSC_6220-768x512.jpg"
                  alt="Ashirvad Jesuit Community"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
