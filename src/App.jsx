import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import CvModal from './components/CvModal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [transitionTrigger, setTransitionTrigger] = useState(0);
  const [targetPage, setTargetPage] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Make lenis globally accessible for other components if needed
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Smooth diagonal curtain routing handler
  const navigateTo = (page) => {
    if (page === currentPage) return;

    // 1. Set target page
    setTargetPage(page);

    // 2. Fire the preloader skew-slide transition
    setTransitionTrigger((prev) => prev + 1);

    // 3. Midway through (curtains cover screen), update page content state
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }, 600);
  };

  return (
    <>
      <Preloader trigger={transitionTrigger} targetPage={targetPage} lang={lang} />
      <CustomCursor />
      
      <Header onNavigate={navigateTo} currentPage={currentPage} lang={lang} setLang={setLang} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} onShowCv={() => setIsCvOpen(true)} lang={lang} />
            <About lang={lang} />
            <Projects onNavigate={navigateTo} lang={lang} />
            <Certificates lang={lang} />
            <Skills lang={lang} />
            <Experience lang={lang} />
            <Contact lang={lang} />
          </>
        ) : (
          <AllProjects onNavigate={navigateTo} lang={lang} />
        )}
      </main>

      <Footer />

      {/* PDF CV Popup Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} lang={lang} />
    </>
  );
}

export default App;
