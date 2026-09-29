import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-200/90 bg-white">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
