import React from 'react';
import Collapsible from 'react-collapsible';
import '../../styles/ThreeView.css'

function PropsCard(props) {
  const properities = props.properities
  return (
    <div className='no-variant-container'>
      <Collapsible
      open="true" 
      trigger="Properities">

        {/* {properities.map((properity)=>{
          return(
            <div className='d-flex justify-content-between properities'>
              <p style={{padding:"0",margin:"0"}}>{properity.name}</p>
              <p style={{padding:"0",margin:"0"}}>%{properity.value}</p>
            </div>
          )
        })} */}

    </Collapsible>
    </div>
  );
}

export default PropsCard;