import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Expertise from './components/Expertise';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import Timeline from './components/Timeline';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none -z-10" />
      
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Expertise />
        <Results />
        <CaseStudies />
        <Timeline />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
