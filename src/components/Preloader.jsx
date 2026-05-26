import React, { useEffect, useState } from 'react';

const Preloader = ({ trigger }) => {
  const [hideLoader, setHideLoader] = useState(false);

  // Initial load transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic route transition triggers
  useEffect(() => {
    if (trigger) {
      setHideLoader(false);
      const timer = setTimeout(() => {
        setHideLoader(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className={`preloader ${hideLoader ? 'hide' : ''}`}>
      <div className="panel-left-anim"></div>
      <div className="panel-right-anim"></div>
      <div className="preloader__content">
        PORTFOLIO
      </div>
    </div>
  );
};

export default Preloader;
