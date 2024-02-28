import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Landningssida from './pages/landningssida';
import SectionOne from './components/separationscoachen/separationscoachen';
import SectionFour from './components/Ommig/SectionFour';
import SectionFive from './components/tjanster/tjanster'; 
import { Header } from './components/header';
import { Footer } from './components/footer';
import './index.css';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header role="banner" />
        <div role="main">
          <Routes>
            <Route path="/" element={<Landningssida />} />
            <Route path="/separationsCoachen" element={<SectionOne />} />
            <Route path="/omMig" element={<SectionFour />} />
            <Route path="/tjanster" element={<SectionFive />} /> 
            {/* Uncomment this line for a 404 page */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </div>
        <Footer role="contentinfo"/>
      </div>
    </BrowserRouter>
  );
}


export default App;