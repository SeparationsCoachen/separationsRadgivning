import React from 'react';
import SectionOne from '../components/separationscoachen/separationscoachen';
import SectionTwo from '../components/tjanster/sectionTwo';
import SectionFour from '../components/Ommig/SectionFour';
import '../css/landningssida.css';

const Landningssida = () => {
    return (
        <div className="landningssida">
            <SectionOne/>
            <SectionTwo/>
            <SectionFour/>

        </div>
    );
}

export default Landningssida;