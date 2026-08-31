import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Strategy Rooted In Verified Data.</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            {portfolioData.personal.about}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium text-slate-300 border border-slate-700">Research</span>
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium text-slate-300 border border-slate-700">Strategy</span>
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium text-slate-300 border border-slate-700">Execution</span>
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium text-slate-300 border border-slate-700">Optimization</span>
            <span className="px-4 py-2 rounded-full bg-cyan-900/30 text-sm font-medium text-cyan-400 border border-cyan-800">Growth</span>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <h3 className="text-xl font-bold text-white mb-4">Core Philosophy</h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">01.</span>
              <span><strong>Data-First Execution:</strong> Every initiative is rooted in verifiable analytics (GA4, GSC, Ad Engines) with zero fluff.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">02.</span>
              <span><strong>Full-Funnel Integration:</strong> Unifying organic search, paid media, and creative hooks to map the entire customer journey.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold mt-1">03.</span>
              <span><strong>Next-Gen Search Ready:</strong> Pioneering AEO & GEO to capture intent in an AI-driven discovery landscape.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
