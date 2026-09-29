import { portfolioData, getMailtoUrl, handleEmailClick } from '../data/portfolioData';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass-panel border-t-0 border-x-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-slate-900 tracking-tight">
          {portfolioData.personal.name}
          <span className="text-indigo-600">.</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
          <a href="#results" className="hover:text-indigo-600 transition-colors">Results</a>
          <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
        </div>
        <a
          href={getMailtoUrl()}
          onClick={handleEmailClick}
          className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 shadow-sm shadow-indigo-600/20 transition-all"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
