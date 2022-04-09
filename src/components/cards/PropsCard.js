import React from 'react';
import Collapsible from 'react-collapsible';
import '../../styles/ThreeView.css'

function PropsCard(props) {
  const properities = props.properities
  return (
    <div className='no-variant-container'>
      <Collapsible
      open="true" 
      trigger="Usage">

        {properities.map((properity)=>{
          return(
            <div className='d-flex justify-content-between properities'>
              <li style={{padding:"0",margin:"0"}}>{properity}</li>
            </div>
          )
        })}

    </Collapsible>
    </div>
  );
}

export default PropsCard;