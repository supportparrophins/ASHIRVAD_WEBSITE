import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(15);
  const [fadeState, setFadeState] = useState('entering'); // entering -> loaded -> hidden

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeState('loaded'), 250);
          setTimeout(() => {
            setFadeState('hidden');
            if (onFinish) onFinish();
          }, 650);
          return 100;
        }
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (fadeState === 'hidden') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C1017] text-white transition-all duration-500 ${
        fadeState === 'loaded' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-[#0D2A45]/40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm px-6 text-center">
        
        {/* Animated Brand Symbol with Spin Ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer Glowing Ring */}
          <div className="w-24 h-24 rounded-full border-2 border-amber-500/20 border-t-[#0D2A45] border-r-amber-400 animate-spin"></div>
          
          {/* Inner Logo Image */}
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <img
              src="/uploads/2020/07/ashirvadj-1-1.png"
              alt="Ashirvad Logo"
              className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] animate-pulse"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-0.5 rounded-full inline-block">
            KARNATAKA JESUITS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white">
            ASHIRVAD
          </h2>
          <p className="text-xs text-slate-400 font-light tracking-widest uppercase">
            Accompanying the Marginalised
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-56 space-y-2">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-[#0D2A45] via-amber-500 to-amber-400 rounded-full transition-all duration-200 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
            <span>Loading sanctuary...</span>
            <span>{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
