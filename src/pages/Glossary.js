import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Navigation from '../components/navigation/Navigation';
import GlossaryCards from '../components/GlossaryCards';

function Glossary() {
    return (
        <div className='d-flex page-nav-contaier w-100 align-items-evenly'>
            <Sidebar />
            <Navigation />
            <GlossaryCards
             />
        </div>
    );
}

export default Glossary;