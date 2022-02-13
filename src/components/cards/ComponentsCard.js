import React from 'react';
import Collapsible from 'react-collapsible';
import '../../styles/ThreeView.css'

function ComponentsCard(props) {
  const properities = props.properities
  return (
      <div className='variant-container'>
      <Collapsible
      open="true" 
      trigger="Components">

        {properities.map((properity)=>{
          return(
            <div className='d-flex justify-content-between properities'>
              <p style={{padding:"0",margin:"0"}}>{properity.name}</p>
              <p style={{padding:"0",margin:"0"}}>%{properity.value}</p>
            </div>
          )
        })}

    </Collapsible>
    </div>
  );
}

export default ComponentsCard;