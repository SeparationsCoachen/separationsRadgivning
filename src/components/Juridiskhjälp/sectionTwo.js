import React from 'react';
import ImageTwoComponent from './imageTwo';
import Text2Component from './fetchJuridisk';
import SectionThree from '../Tappningsterapi/sectionThree';
import '../../css/sectionTwo.css';

const SectionTwo = () => {
    return (
        <div className="Juridiskhjalp">
            <ImageTwoComponent className="ärduhär?" />
            <div className="juridisk-tappning">
            <Text2Component />
            <SectionThree />
            </div>
        </div>
    );
}

export default SectionTwo;