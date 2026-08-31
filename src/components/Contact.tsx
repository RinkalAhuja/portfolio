import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <div className="inline-block px-4 py-1.5 bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-sm font-bold uppercase tracking-widest rounded-full mb-8">
        What's Next?
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a growth challenge? <br/>Let's turn it into a strategy.</h2>
      <p className="text-xl text-slate-400 mb-12">I'm always open to discussing new opportunities, performance marketing challenges, and data-driven growth strategies.</p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
        <a href={`mailto:${portfolioData.personal.email}`} className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all w-full sm:w-auto">
          Start a Conversation
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <div className="flex items-center gap-4 text-slate-300">
          <Phone className="text-cyan-400" size={20} />
          <span>{portfolioData.personal.phone}</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <Github className="text-cyan-400" size={20} />
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors truncate">
            GitHub Portfolio
          </a>
        </div>
        <div className="flex items-center gap-4 text-slate-300 sm:col-span-2">
          <MapPin className="text-cyan-400" size={20} />
          <span>{portfolioData.personal.location}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
