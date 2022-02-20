import React from 'react';
import '../../styles/Sidebar.css'
import dash from '../../images/dashboard.svg'

const Sidebar = () => {
    return (
        <div className="w-25 sidebar-custom-wrapper">
        
        <div className='sidebar-custom'>
            <div className='sidebar-custom__side'>
                <h2 className='sidebar-custom__text logo'>
                    arotolia
                </h2>
            </div>
                <div className='sidebar-custom__main d-flex flex-column align-items-center'>
                    <div className='sidebar-custom__upper d-flex flex-column'>
                        <div className='sidebar-custom__user-name-wrapper'>
                            User N.
                        </div>
                   
                
                        <ul className='sidebar-custom__middle text-left sidebar-cutom__items-wrapper'>
                            <a className='big-p' href=""><li><img src={dash}></img>DASHBOARD</li></a>
                            <a className='big-p' href=""><li>LIBRARY</li></a>
                            <a className='big-p' href=""><li>PATIENTS</li></a>
                        </ul> 
                    </div>

                    <ul className='sidebar-custom__buttom sidebar-cutom__items-wrapper'>
                        <a className='big-p' href=""><li>SETTINGS</li></a>
                        <a className='big-p' href=""><li>LOG OUT</li></a>
                    </ul> 
                </div>
        </div>
        </div>
    );
};

export default Sidebar;