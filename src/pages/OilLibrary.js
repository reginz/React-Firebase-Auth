import React from 'react';
import Sidebar from '../components/Sidebar';
import OilLibraryCards from '../components/cards/OilLibraryCards';

function OilLibrary(props) {
    return (
        <div className='d-flex align-items-between'>
            <Sidebar />
            <OilLibraryCards />
        </div>
    );
}

export default OilLibrary;