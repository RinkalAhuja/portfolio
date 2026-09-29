import { portfolioData, getMailtoUrl, handleEmailClick } from '../data/portfolioData';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <BarChart2 size={14} />
          Digital Marketing • SEO • Performance
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Turning Search, Social & Paid Media Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Measurable Growth.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          {portfolioData.personal.subtitle} leveraging data, technical architecture, and creative strategy to scale enterprise brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="#work" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all">
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href={getMailtoUrl()}
            onClick={handleEmailClick}
            className="inline-flex justify-center items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-all"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-3xl blur-xl pointer-events-none" />
        <div className="relative w-72 sm:w-80 lg:w-96 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
          <img
            src="rinkal-ahuja.jpg"
            alt={portfolioData.personal.name}
            width={731}
            height={1024}
            loading="eager"
            decoding="async"
            className="w-full h-[380px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-6 pt-16">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Growth Projects
            </div>
            <div className="text-lg font-bold text-white leading-snug">{portfolioData.personal.name}</div>
            <div className="text-sm text-cyan-400 font-medium">{portfolioData.personal.title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
