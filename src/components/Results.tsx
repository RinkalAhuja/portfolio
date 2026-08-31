import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Results = () => {
  return (
    <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Verified Results</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Numbers driven by strategic execution. Sourced directly from verified analytics, search consoles, and ad manager reports.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.results.map((res, idx) => (
          <div key={idx} className="bg-[#0b1324] border border-slate-700/50 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-400">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">{res.metric}</div>
            <div className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-4">{res.label}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{res.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
