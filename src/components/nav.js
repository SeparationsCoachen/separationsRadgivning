import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

export const Navigate = () => {
  // State för att hålla koll på om navigationsmenyn är öppen eller inte
  const [isOpen, setIsOpen] = useState(false);
  // Refs för att referera till navigations- och knapp-elementen i DOM
  const navRef = useRef();
  const buttonRef = useRef();

  // Callback för att uppdatera tabIndex på navigationslänkar
  const updateNavLinkTabIndex = useCallback((menuIsOpen) => {
    const links = navRef.current.querySelectorAll('a');
    links.forEach((link) => {
      link.tabIndex = menuIsOpen ? '0' : '-1';
    });
  }, []);
  // Callback för att växla meny öppen/stängd och hantera fokus
  const toggleMenu = useCallback((event) => {
  // Stoppa eventet från att bubbla upp till överordnade element
    event.stopPropagation();
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    updateNavLinkTabIndex(newIsOpen);
    // Om menyn stängs, flytta fokus tillbaka till knappen
    if (!newIsOpen) {
      buttonRef.current.focus();
    }
  }, [isOpen, updateNavLinkTabIndex]);


  // Effekt för att hantera tangentbordshändelser (t.ex. Escape-tangenten)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        toggleMenu(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleMenu]);

  // Effekt för att automatiskt flytta fokus till den första länken när menyn öppnas
  useEffect(() => {
    if (isOpen) {
      const firstLink = navRef.current.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isOpen]);

  // Effekt för att stänga menyn när användaren skrollar
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        updateNavLinkTabIndex(false);
      }
    };
    window.addEventListener('scroll', closeMenuOnScroll);
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, [isOpen, updateNavLinkTabIndex]);

  // Effekt för att stänga menyn när en klickhändelse sker utanför menyn
  useEffect(() => {
    const handleClickOutside = (event) => {
    // Kontrollerar om klicket är utanför navRef-elementet och inte på buttonRef-elementet
      if (navRef.current && !navRef.current.contains(event.target)
      && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
        updateNavLinkTabIndex(false);
      }
    };
    // Lägger till eventlyssnare om menyn är öppen
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Rensar eventlyssnaren när komponenten avmonteras eller om menyn stängs
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, updateNavLinkTabIndex]);

  return (
    <header className="menu">
      <button
        ref={buttonRef}
        className="hamburger"
        onClick={(event) => toggleMenu(event)} // Eventlyssnare för att öppna/stänga menyn
        aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={isOpen}
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={isOpen ? 'rotate' : ''}
          fill={isOpen ? '#2E5955' : '#2E5955'}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <nav
        ref={navRef}
        className={`nav ${isOpen ? 'open' : ''}`} // Klassen ändras baserat på isOpen
        aria-hidden={!isOpen}>
        <ul>
          <li className="nav-coach">
            <NavLink to="/" tabIndex={isOpen ? '0' : '-1'}>Separations Coachen</NavLink>
          </li>
          <li>
            <NavLink to="/juridiskhjalp" tabIndex={isOpen ? '0' : '-1'}>Juridisk hjälp</NavLink>
          </li>
          <li>
            <NavLink to="/tappningsterapi" tabIndex={isOpen ? '0' : '-1'}>Tappningsterapi</NavLink>
          </li>
          <li>
            <NavLink to="/tjanster" tabIndex={isOpen ? '0' : '-1'}>Tjänster</NavLink>
          </li>
          <li>
            <NavLink to="/omMig" tabIndex={isOpen ? '0' : '-1'}>Om mig</NavLink>
          </li>
          {/* Fortsätt med fler NavLink-element här */}
        </ul>
      </nav>
    </header>
  );
};