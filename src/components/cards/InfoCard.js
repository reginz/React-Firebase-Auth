import React from 'react';

function InfoCard(props) {
    return (
        <>
            <div
            className='info-card d-flex text-center'>

                <div>
                    <p>FAMILY</p>
                    <hr className='orange-hr'></hr>
                    <p>{props.family}</p>
                </div>
                
                <div>
                    <p>ORIGIN</p>
                    <hr className='orange-hr'></hr>
                    <p>{props.origin}</p>
                </div>

                <div>
                    <p>AROMA</p>
                    <hr className='orange-hr'></hr>
                    <ul>
                   {props.aroma.map((a) => {
                       return(
                           <li>{a}</li>
                       )
                   })}
                    </ul>
                    
                </div>
                
            </div>
        </>
    );
}

export default InfoCard;