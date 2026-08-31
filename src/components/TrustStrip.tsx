import { portfolioData } from '../data/portfolioData';

const TrustStrip = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioData.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
