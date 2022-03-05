import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Sidebar from '../components/navigation/Sidebar';
import Setting from '../components/Setting';
import UpdateProfile from '../components/UpdateProfile';

function Settings(props) {
    return (
        <div className='d-flex page-nav-contaier w-100'>
            <Sidebar />
            <Navigation />
            <div className='d-flex flex-column w-100'>
            <Setting />
            <UpdateProfile />
            </div>
        </div>
    );
}

export default Settings;