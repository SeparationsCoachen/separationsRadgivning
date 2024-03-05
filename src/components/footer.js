import React from 'react';
import '../css/footer.css';
import { useModal } from './modalContext';
 // Importera useModal-hook
import '../css/button.css';

export const Footer = () => {
  const { openModal } = useModal();
  const handleClick = () => {
    window.open('https://calendly.com/separationscoach', '_blank');
  }; 
  return (
    <footer className="footerGrid">
      <div className="contactFooter">
        {/* Kontakt-knappen som öppnar modalen */}
        <button onClick={openModal} className="contactButtonFooter" aria-label="Kontakta mig">Kontakta mig</button>
      </div>
      <div className="bookingFooter">
    <button
      className="BookingButtonFooter"
      type="button"
      onClick={handleClick}
      aria-label='Boka tjänst'>
      Boka tid
    </button>
      </div>

      <div className="social">
        {/* Länk till Instagram */}
        <a href="https://www.instagram.com/ellatech.se" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram">
          <i className="instagram"> <p>Separationscoach </p></i>
        </a>
      </div>
    </footer>
  );
}
