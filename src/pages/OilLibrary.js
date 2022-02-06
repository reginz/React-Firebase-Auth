import React from 'react';
import OilLibraryCards from '../components/cards/OilLibraryCards';

function OilLibrary() {
    return (
        <div className='d-flex flex-column' style={{gap:"5em"}}>
            <OilLibraryCards />
        </div>
    );
}

export default OilLibrary;