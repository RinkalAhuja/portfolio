import { portfolioData } from '../data/portfolioData';

const Timeline = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
      </div>
      <div className="space-y-12 border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 md:pl-12">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500"></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="text-cyan-400 font-medium">{exp.company}</div>
              </div>
              <div className="text-slate-500 font-mono text-sm mt-2 md:mt-0">{exp.date}</div>
            </div>
            <ul className="space-y-3">
              {exp.achievements.map((achieve, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                  <span className="text-slate-600 mt-1">▹</span>
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
