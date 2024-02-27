//här ska sen bild och text in
import React from 'react';
import '../../css/tjanster.css';
import Text3Component from './fetchTappning';
import Text2Component from './fetchJuridisk';
import ImageTwoComponent from './imageTwo';

const SectionFive = () => {
    return (
        <div className="tjanster">
                
                 <div className="picture">
             <ImageTwoComponent className="ärduhär?" />
             </div>
             <h1> Tjänster</h1>
   < main className="tjanst-components">
        <Text2Component />
        <Text3Component />
        </main>
        </div>
    );
    };

export default SectionFive;