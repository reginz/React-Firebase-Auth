import React from 'react';
import OilLibraryCards from '../components/cards/OilLibraryCards';
import Sidebar from '../components/navigation/Sidebar';
import Navigation from '../components/navigation/Navigation';

function OilLibrary() {
    return (
        <div className='d-flex page-nav-contaier w-100 align-items-evenly'>
            <Sidebar />
            <Navigation />
            <OilLibraryCards />
        </div>
    );
}

export default OilLibrary;