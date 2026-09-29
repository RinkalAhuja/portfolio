import { portfolioData } from '../data/portfolioData';

const Tools = () => {
  return (
    <section className="py-24 px-6 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Tech Stack</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">Technology & Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.tools.map((group, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-4 border-b border-slate-200 pb-3">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item, i) => (
                  <li key={i} className="text-slate-700 font-medium text-sm flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
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
