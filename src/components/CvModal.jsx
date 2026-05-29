import React, { useEffect } from 'react';
import { translations } from '../data/translations';

const CvModal = ({ isOpen, onClose, lang }) => {
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
          <h2 className="cv-modal-title">{translations[lang].cvModal.title}</h2>
          <div className="cv-modal-actions">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-modal-full-view"
            >
              {translations[lang].cvModal.openFull}
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
              {translations[lang].cvModal.fallback}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"> {translations[lang].cvModal.download}</a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
