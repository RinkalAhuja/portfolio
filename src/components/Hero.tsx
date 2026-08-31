import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <BarChart2 size={14} />
          Digital Marketing • SEO • Performance
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Turning Search, Social & Paid Media Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Measurable Growth.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          {portfolioData.personal.subtitle} leveraging data, technical architecture, and creative strategy to scale enterprise brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="#work" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-all">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
