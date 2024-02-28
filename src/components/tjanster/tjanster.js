//här ska sen bild och text in
import React from 'react';
import '../../css/tjanster.css';
import ImageTwoComponent from './imageTwo';
import Text2Component from './fetchJuridisk';
import SectionThree from './fetchTappning';

const SectionFive = () => {
    return (
        <div className="tjanster">
            <ImageTwoComponent className="imageTwo" />
            <div className="juridisk-tappning">
            <Text2Component />
            <SectionThree />
            </div>
        </div>
    );
}

export default SectionFive;