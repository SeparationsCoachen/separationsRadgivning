import React from 'react';
import PaketEtt from './paketEtt';
import PaketTva from './paketTva';
import PaketTre from './paketTre'
import PaketFyra from './paketFyra'
import '../../css/paket.css'


const SectionPris = () => {
    return (
        <main className="paket-main">
            <PaketEtt />
            <PaketTva />
            <PaketFyra />
            <PaketTre />
           
        </main>
    );
}

export default SectionPris;
