import React from 'react';
import SectionOne from '../components/separationscoachen/separationscoachen';
import SectionFour from '../components/Ommig/SectionFour';
import SectionFive from '../components/tjanster/tjanster';
import '../css/landningssida.css';

const Landningssida = () => {
    return (
        <div className="landningssida">
            <SectionOne/>
            <SectionFive/>
            <SectionFour/>

        </div>
    );
}

export default Landningssida;