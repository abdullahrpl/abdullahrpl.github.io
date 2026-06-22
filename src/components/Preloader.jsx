import { useEffect, useState } from 'react';

const Preloader = ({ trigger, targetPage, lang }) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const [contentFadeOut, setContentFadeOut] = useState(false);

  // Initial load transition
  useEffect(() => {
    // 1. Show the logo/text and line for 1.2s
    const timer = setTimeout(() => {
      setContentFadeOut(true);
      
      // 2. Slide the curtain up after content fades
      const openTimer = setTimeout(() => {
        setHideLoader(true);
        
        const completeTimer = setTimeout(() => {
          setIsInitialLoad(false);
        }, 800); // match transition duration
        
        return () => clearTimeout(completeTimer);
      }, 400);
      
      return () => clearTimeout(openTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Dynamic route transition triggers
  useEffect(() => {
    if (trigger > 0) {
      let openTimer;
      
      // Wrap state change in setTimeout to avoid cascading renders warning
      const startTimer = setTimeout(() => {
        setContentFadeOut(false);
        setHideLoader(false);
      }, 0);

      // 2. Hold them closed, then slide open after 800ms
      const timer = setTimeout(() => {
        setContentFadeOut(true);
        
        openTimer = setTimeout(() => {
          setHideLoader(true);
        }, 200); // short delay to fade out transition text before opening
      }, 800);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(timer);
        if (openTimer) clearTimeout(openTimer);
      };
    }
  }, [trigger]);

  return (
    <div className={`preloader ${hideLoader ? 'is--hidden' : 'is--active'}`}>
      {/* Sliding curtain */}
      <div className="preloader__curtain"></div>
      
      {/* Preloader Content */}
      <div className={`preloader__content ${contentFadeOut ? 'is--faded-out' : ''}`}>
        {isInitialLoad ? (
          <div className="preloader__brand-wrapper">
            <h1 className="preloader__logo">ABDULLAH</h1>
            <div className="preloader__line"></div>
          </div>
        ) : (
          <div className="preloader__transition-wrapper">
            <span className="preloader__page-name">
              {targetPage === 'projects' 
                ? (lang === 'ID' ? 'PROYEK' : 'PROJECTS')
                : (lang === 'ID' ? 'BERANDA' : 'HOME')
              }
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;

