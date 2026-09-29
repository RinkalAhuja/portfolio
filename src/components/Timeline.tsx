import { portfolioData } from '../data/portfolioData';

const Timeline = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Career Track</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Professional Experience</h2>
      </div>
      <div className="space-y-10 border-l-2 border-indigo-200 ml-4 md:ml-6 pl-8 md:pl-12">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -left-[41px] md:-left-[57px] top-8 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 shadow-sm"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <div className="text-indigo-600 font-semibold">{exp.company}</div>
              </div>
              <div className="inline-block w-max px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs font-semibold mt-2 md:mt-0">
                {exp.date}
              </div>
            </div>
            <ul className="space-y-3">
              {exp.achievements.map((achieve, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-0.5">▹</span>
                  {achieve}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
