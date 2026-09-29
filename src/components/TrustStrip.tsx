import { portfolioData } from '../data/portfolioData';

const TrustStrip = () => {
  return (
    <section className="border-y border-slate-200/90 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {portfolioData.stats.map((stat, idx) => (
            <div key={idx} className={`text-center md:text-left ${idx > 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1.5">{stat.value}</div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
