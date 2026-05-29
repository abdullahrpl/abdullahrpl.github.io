import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import CvModal from './components/CvModal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [transitionTrigger, setTransitionTrigger] = useState(0);
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Smooth diagonal curtain routing handler
  const navigateTo = (page) => {
    if (page === currentPage) return;

    // 1. Fire the preloader skew-slide transition
    setTransitionTrigger((prev) => prev + 1);

    // 2. Midway through (curtains cover screen), update page content state
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }, 600);
  };

  return (
    <>
      <Preloader trigger={transitionTrigger} />
      <CustomCursor />
      
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} onShowCv={() => setIsCvOpen(true)} />
            <About />
            <Projects onNavigate={navigateTo} />
            <Certificates />
            <Skills />
            <Contact />
          </>
        ) : (
          <AllProjects onNavigate={navigateTo} />
        )}
      </main>

      <Footer />

      {/* PDF CV Popup Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
}

export default App;
