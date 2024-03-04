/* isOpen determines whether the modal is visible.
onClose is a function to close the modal.
children allows you to pass content
(like a form) into the Modal component.
In ContactModal.js, we create a ContactModal
component that also uses the useModal hook to access
the modal's state and functions.
This component only renders if isModalOpen is true. */
// Modal.js

import React, { useEffect } from 'react';
import { useModal } from './modalContext';
import ContactForm from './contactForm';
import '../css/modal.css';

export const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const modalRef = React.useRef(null); // Ref för att referera till modal-elementet

  // Flytta fokus till modalen när den öppnas och sätt upp en lyssnare för tangentnedtryckningar
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current.focus();
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      // Ta bort lyssnaren när komponenten avmonteras eller modalen stängs
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen, closeModal]);

  // Stäng modalen och återför fokus till elementet som öppnade den (hanteras inte här)
  const handleClose = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="modal"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      ref={modalRef}
      tabIndex="-1">
      <div className="modal-content">
        <h1 id="modalTitle">Happier Soul</h1>
        <button
          type="button"
          className="close"
          onClick={handleClose}
          aria-label="Stäng">
          &times;
        </button>
        <p id="modalDescription" className="visually-hidden">
  Dialogfönster för att kontakta EllaTech. Tryck Escape för att stänga.
        </p>
        <div className="modal-body">
          <ContactForm className="contactPadding" />
        </div>
      </div>
    </div>
  );
};