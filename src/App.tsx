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
      {/* Background Ambient Glow */}
      <div className="fixed top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/35 blur-[130px] pointer-events-none -z-10" />
      
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
