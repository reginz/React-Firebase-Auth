import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Navigation from '../components/navigation/Navigation';
import VisitCard from '../components/cards/VisitCard';

function Visit() {
    return (
        <div className='d-flex page-nav-contaier w-100 align-items-evenly'>
            <Sidebar />
            <Navigation />
            <VisitCard />
        </div>
    );
}

export default Visit;