import React from 'react';
import { Navigate } from './nav';
import Logo from './logga'
import '../css/header.css';

export const Header = () => {
  return (
    <header className="mainHeader">
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <nav className="Navigate" aria-label="Main navigation">
          <Navigate />
        </nav>
      </div>
    </header>
  )
}