import { portfolioData } from '../data/portfolioData';
import { Search, TrendingUp, Share2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Search: Search,
  TrendingUp: TrendingUp,
  Share2: Share2
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl">A comprehensive approach to modern digital growth, bridging the gap between technical architecture and creative performance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.expertise.map((exp, idx) => {
            const Icon = iconMap[exp.icon];
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <Icon size={24} className="text-slate-400 group-hover:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{exp.title}</h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
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
