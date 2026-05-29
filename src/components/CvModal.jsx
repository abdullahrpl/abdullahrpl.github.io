import React, { useEffect } from 'react';

const CvModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h2 className="cv-modal-title">Curriculum Vitae</h2>
          <div className="cv-modal-actions">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-modal-full-view"
            >
              Buka Penuh ↗
            </a>
            <button className="cv-modal-close" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>
        <div className="cv-modal-body">
          <iframe 
            src="/cv.pdf" 
            title="Curriculum Vitae - Abdullah"
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
          >
            <p>
              Browser Anda tidak mendukung melihat PDF secara langsung. 
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"> Klik di sini untuk mengunduh PDF.</a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
