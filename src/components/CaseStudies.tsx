import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Project Case Studies</h2>
          <p className="text-slate-400 max-w-2xl">A selection of recent work highlighting problem-solving, strategic methodology, and measurable business impact.</p>
        </div>
        
        <div className="space-y-8">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="bg-[#0b1324] border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all flex flex-col lg:flex-row">
              <div className="p-8 lg:w-1/3 bg-[#131d31] border-b lg:border-b-0 lg:border-r border-slate-700 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full w-max mb-4">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.client}</h3>
              </div>
              <div className="p-8 lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Strategy & Execution</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.strategy}</p>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Objective</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.objective}</p>
                </div>
                <div className="flex flex-col justify-center bg-slate-900/50 p-6 rounded-xl border border-slate-800/50">
                  <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ArrowUpRight size={16} /> Key Result
                  </h4>
                  <p className="text-white font-medium leading-relaxed">{project.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
