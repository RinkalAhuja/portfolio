import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">About & Approach</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Strategy Rooted In Verified Data.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {portfolioData.personal.about}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-slate-700 border border-slate-200 shadow-sm">Research</span>
            <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-slate-700 border border-slate-200 shadow-sm">Strategy</span>
            <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-slate-700 border border-slate-200 shadow-sm">Execution</span>
            <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-slate-700 border border-slate-200 shadow-sm">Optimization</span>
            <span className="px-4 py-2 rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 border border-emerald-200">Measurable Growth</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-slate-900/5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none"></div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Core Philosophy</h3>
          <ul className="space-y-5 text-slate-600">
            <li className="flex items-start gap-3.5">
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 font-bold text-sm mt-0.5 shrink-0">01</span>
              <span><strong className="text-slate-900">Data-First Execution:</strong> Every initiative is rooted in verifiable analytics (GA4, GSC, Ad Engines) with zero fluff.</span>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 font-bold text-sm mt-0.5 shrink-0">02</span>
              <span><strong className="text-slate-900">Full-Funnel Integration:</strong> Unifying organic search, paid media, and creative hooks to map the entire customer journey.</span>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 font-bold text-sm mt-0.5 shrink-0">03</span>
              <span><strong className="text-slate-900">Next-Gen Search Ready:</strong> Pioneering AEO & GEO to capture intent in an AI-driven discovery landscape.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
