import React from 'react';

function InfoCard(props) {
    return (
        <>
            <div
            className='info-card d-flex text-center'>

                <div>
                    <p>OIL PLANT</p>
                    <hr className='orange-hr'></hr>
                    <p>{props.family}</p>
                </div>
                
                <div>
                    <p>OBTAINED FROM</p>
                    <hr className='orange-hr'></hr>
                    <p>{props.origin}</p>
                </div>

                <div>
                    <p>METHOD</p>
                    <hr className='orange-hr'></hr>
                    <p>{props.aroma}</p>
                    
                </div>
                
            </div>
        </>
    );
}

export default InfoCard;