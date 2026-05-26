import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const circleRef = useRef(null);

  // Store exact mouse positions
  const mouseCoords = useRef({ x: 0, y: 0 });
  // Store smoothed positions for the trailing circle
  const circleCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      
      // Instantly position the inner dot
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Smooth trailing circle interpolation
    let animationFrameId;
    const updateCirclePos = () => {
      const easeFactor = 0.15; // smooth trailing speed
      
      circleCoords.current.x += (mouseCoords.current.x - circleCoords.current.x) * easeFactor;
      circleCoords.current.y += (mouseCoords.current.y - circleCoords.current.y) * easeFactor;

      if (circleRef.current) {
        circleRef.current.style.left = `${circleCoords.current.x}px`;
        circleRef.current.style.top = `${circleCoords.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updateCirclePos);
    };

    // Global delegation for hover expansions
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .cta, .project-card, .scroll-btn, .cta__mobile')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .cta, .project-card, .scroll-btn, .cta__mobile')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animationFrameId = requestAnimationFrame(updateCirclePos);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cursor">
      <div 
        ref={circleRef} 
        className={`cursor__circle ${isHovered ? 'is--hovered' : ''}`}
      >
        <div ref={dotRef} className="cursor__dot"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
