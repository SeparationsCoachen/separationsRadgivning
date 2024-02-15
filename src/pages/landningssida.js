import React from 'react';
import SectionOne from '../components/separationscoachen/separationscoachen';
import SectionTwo from '../components/Juridiskhjälp/sectionTwo';
import SectionFour from '../components/Ommig/SectionFour';
import SectionFive from '../components/tjänster/tjanster';
import '../css/landningssida.css';

const Landningssida = () => {
    return (
        <div className="landningssida">
            <SectionOne/>
            <SectionTwo/>
            <SectionFive/>
            <SectionFour/>

        </div>
    );
}

export default Landningssida;