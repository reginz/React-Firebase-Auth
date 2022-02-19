import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-25 sidebar-custom-wrapper">
        <div className='sidebar-custom'>
            {/* Taşı */}
           
                    <div className='sidebar-logo-wrapper d-flex flex-column align-items-center justify-content-center'>
                
                </div>
               
                <ul className='sidebar-inner'>
               
                <li onClick={()=>window.open("https://zapier.com/apps/brieferr/integrations", "_blank")}
                        className='item mb-2 bold-small-paragraph'
                        >
                  
                            <div id="title">Integrations</div>
                          
                        </li>
                        <li onClick={()=>window.open("https://blog.brieferr.com", "_blank") }
                        className='item mb-2 bold-small-paragraph'
                        >
                            <div id="title">Blog</div>
                          
                        </li>
                </ul> 

        </div>
        </div>
    );
};

export default Sidebar;