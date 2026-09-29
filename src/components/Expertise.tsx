import { portfolioData } from '../data/portfolioData';
import { Search, TrendingUp, Share2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Search: Search,
  TrendingUp: TrendingUp,
  Share2: Share2
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">What I Do</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Core Capabilities</h2>
          <p className="text-slate-600 max-w-2xl text-lg">A comprehensive approach to modern digital growth, bridging the gap between technical architecture and creative performance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.expertise.map((exp, idx) => {
            const Icon = iconMap[exp.icon];
            return (
              <div key={idx} className="bg-[#F8FAFC] border border-slate-200/90 p-8 rounded-2xl hover:bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <Icon size={24} className="text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{exp.title}</h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-2.5 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
