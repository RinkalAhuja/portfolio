import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-800 bg-slate-950">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
