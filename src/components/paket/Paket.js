import React from 'react';
import PaketEtt from './paketEtt';
import PaketTva from './paketTva';
import PaketTre from './paketTre'
import PaketFyra from './paketFyra'
import '../../css/paket.css'


const SectionPris = () => {
    return (
        <div className="paket-main">
            <PaketEtt />
            <PaketTva />
            <PaketFyra />
            <PaketTre />
           
        </div>
    );
}

export default SectionPris;
