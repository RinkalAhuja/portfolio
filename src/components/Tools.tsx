import { portfolioData } from '../data/portfolioData';

const Tools = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Technology & Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.tools.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-slate-400 font-medium text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
