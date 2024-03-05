import React from 'react'
import { ContactButton } from './contactButton'
import '../css/footer.css'


export const Footer = () => {
  return (
    <footer className="footerGrid">
      <div className="contact">
        <div className="mail">
           <ContactButton className="OverrideButton" />
          
          <div className="social">
          <a href="https://www.instagram.com/ellatech.se" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <i className="fab fa-instagram">popido</i>
          </a>
        </div>
          <p className="copyRight">© EllaTech 2023</p>
        </div>
       
      </div>
    </footer>
  )
}