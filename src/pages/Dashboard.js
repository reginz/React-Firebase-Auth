import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Sidebar from '../components/navigation/Sidebar';
import SavedOils from '../components/SavedOils';

function Dashboard() {
    return (
        <div>
            <Navigation />
            <Sidebar />
            <SavedOils />
        </div>
    );
}

export default Dashboard;