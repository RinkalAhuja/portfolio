import { portfolioData, getMailtoUrl, handleEmailClick } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full mb-8 shadow-sm">
        What's Next?
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Have a growth challenge? <br/>Let's turn it into a strategy.</h2>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">I'm always open to discussing new opportunities, performance marketing challenges, and data-driven growth strategies.</p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
        <a
          href={getMailtoUrl()}
          onClick={handleEmailClick}
          className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all w-full sm:w-auto"
        >
          Start a Conversation
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto bg-white border border-slate-200/90 p-8 rounded-2xl shadow-lg shadow-slate-900/5">
        <div className="flex items-center gap-4 text-slate-700 font-medium">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
            <Phone className="text-indigo-600" size={18} />
          </div>
          <span>{portfolioData.personal.phone}</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700 font-medium">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
            <Mail className="text-indigo-600" size={18} />
          </div>
          <a
            href={getMailtoUrl()}
            onClick={handleEmailClick}
            className="hover:text-indigo-600 transition-colors truncate"
          >
            {portfolioData.personal.email}
          </a>
        </div>
        <div className="flex items-center gap-4 text-slate-700 font-medium">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
            <Github className="text-indigo-600" size={18} />
          </div>
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors truncate">
            GitHub Portfolio
          </a>
        </div>
        <div className="flex items-center gap-4 text-slate-700 font-medium">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
            <MapPin className="text-indigo-600" size={18} />
          </div>
          <span>{portfolioData.personal.location}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
