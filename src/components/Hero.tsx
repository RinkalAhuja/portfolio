import { portfolioData, getMailtoUrl, handleEmailClick } from '../data/portfolioData';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold tracking-widest text-indigo-700 uppercase shadow-sm">
          <BarChart2 size={14} className="text-indigo-600" />
          Digital Marketing • SEO • Performance
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12]">
          Turning Search, Social & Paid Media Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600">Measurable Growth.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          {portfolioData.personal.subtitle} leveraging data, technical architecture, and creative strategy to scale enterprise brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a href="#work" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href={getMailtoUrl()}
            onClick={handleEmailClick}
            className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl border border-slate-300 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-sm transition-all"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 via-blue-500/15 to-emerald-500/20 rounded-[2rem] blur-2xl pointer-events-none" />
        <div className="relative w-72 sm:w-80 lg:w-96 rounded-3xl p-3 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 group">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100">
            <img
              src="rinkal-ahuja.jpg"
              alt={portfolioData.personal.name}
              width={731}
              height={1024}
              loading="eager"
              decoding="async"
              className="w-full h-[370px] sm:h-[410px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 shadow-lg">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Growth Projects
              </div>
              <div className="text-base font-extrabold text-slate-900 leading-snug">{portfolioData.personal.name}</div>
              <div className="text-xs text-indigo-600 font-semibold">{portfolioData.personal.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
