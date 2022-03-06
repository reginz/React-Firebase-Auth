import React from 'react';

function PatientCard(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p className='gray-p pt-3'>Age: {props.age}<br></br>
           Current Treatment: {props.treatment}</p>
        </div>
    );
}

export default PatientCard;