import { portfolioData } from '../data/portfolioData';

const Results = () => {
  return (
    <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">Proven Impact</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Featured Verified Results</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Numbers driven by strategic execution. Sourced directly from verified analytics, search consoles, and ad manager reports.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.results.map((res, idx) => (
          <div key={idx} className="bg-white border border-slate-200/90 p-8 rounded-2xl relative overflow-hidden shadow-md shadow-slate-900/5 hover:border-emerald-300 hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-15 text-emerald-600">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <div className="text-4xl font-extrabold text-slate-900 mb-2">{res.metric}</div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">{res.label}</div>
            <p className="text-sm text-slate-600 leading-relaxed">{res.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
