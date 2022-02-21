import React from 'react';
import OilLibraryCards from '../components/cards/OilLibraryCards';
import Sidebar from '../components/cards/Sidebar';

function OilLibrary() {
    return (
        <div className='d-flex w-100 align-items-evenly'>
            <Sidebar />
            <OilLibraryCards />
        </div>
    );
}

export default OilLibrary;