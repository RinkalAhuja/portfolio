import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Case Studies</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Project Case Studies</h2>
          <p className="text-slate-600 max-w-2xl text-lg">A selection of recent work highlighting problem-solving, strategic methodology, and measurable business impact.</p>
        </div>
        
        <div className="space-y-8">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md shadow-slate-900/5 hover:border-indigo-300 hover:shadow-xl transition-all flex flex-col lg:flex-row">
              <div className="p-8 lg:w-1/3 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full w-max mb-4">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.client}</h3>
              </div>
              <div className="p-8 lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Strategy & Execution</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.strategy}</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Objective</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.objective}</p>
                </div>
                <div className="flex flex-col justify-center bg-emerald-50/70 p-6 rounded-xl border border-emerald-200/80">
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <ArrowUpRight size={16} className="text-emerald-600" /> Verified Key Result
                  </h4>
                  <p className="text-slate-900 font-semibold leading-relaxed">{project.results}</p>
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
