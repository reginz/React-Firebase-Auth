import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Navigation from '../components/navigation/Navigation';
import PatientsLayout from '../components/PatientsLayout';

function Patients() {
    return (
        <div className='d-flex page-nav-contaier w-100 align-items-evenly'>
            <Sidebar />
            <Navigation />
            <PatientsLayout />
        </div>
    );
}

export default Patients;