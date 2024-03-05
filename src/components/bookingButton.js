import React from 'react';
import '../css/button.css';

export const BookingButton = () => {
  // Denna funktion öppnar nu Calendly i en ny flik
  const handleClick = () => {
    window.open('https://calendly.com/separationscoach', '_blank');
  };

  return (
    <button
      className="BookingButton"
      type="button"
      onClick={handleClick}
      aria-label='Boka tjänst'>
      Boka tid
    </button>
  );
};
