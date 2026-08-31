import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0 border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold text-white tracking-tight">
          {portfolioData.personal.name}
          <span className="text-cyan-400">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
          <a href="#results" className="hover:text-cyan-400 transition-colors">Results</a>
          <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        </div>
        <a href="#contact" className="px-5 py-2.5 bg-white text-slate-950 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-950 transition-all">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
