/* Creating a context for the modal.
Defining a provider that includes the state and functions to open
and close the modal,
and providing this state and functions to the rest of your application.
Creating a custom hook useModal which allows you to easily
access the modal's context in any function component in your app. */
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastFocusedElement, setLastFocusedElement] = useState(null);

  const openModal = useCallback(() => {
    console.log('Opening modal...');
    setLastFocusedElement(document.activeElement);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log('Closing modal...');
    setIsModalOpen(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }, [lastFocusedElement]);

  const contextValue = useMemo(() => ({
    isModalOpen,
    openModal,
    closeModal
  }), [isModalOpen, openModal, closeModal]);

  console.log('ModalProvider mounted');

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};