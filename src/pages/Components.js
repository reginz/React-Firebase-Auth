import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Navigation from '../components/navigation/Navigation';
import ComponentsCards from '../components/ComponentsCards';

function Components() {
    return (
        <div className='d-flex page-nav-contaier w-100 align-items-evenly'>
            <Sidebar />
            <Navigation />
            <ComponentsCards
             />
        </div>
    );
}

export default Components;