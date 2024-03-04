import React from 'react';
import { useModal } from './modalContext';
import '../css/button.css'

export const ContactButton = ({ style, children }) => {
  const { openModal } = useModal();

  const handleClick = () => {
    console.log('Button clicked, opening modal...');
    openModal();
  };

  return (
    <button
      className="contactButton"
      type="button" // Changed to 'button' type
      style={style}
      onClick={handleClick}
      aria-label={children ? undefined : 'Kontakta Happier soul'}>
      {children || 'Kontakta mig'}
    </button>
  );
};