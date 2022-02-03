import React from 'react';
import '../../styles/OilCard.css'

function OilCard(props) {
    return (
        <div className='oil-card m-3'
        style={{
            backgroundColor: "var(--purple)"
        }}>
            <p>{props.name}</p>
            <p>family: {props.family}</p>
        </div>
    );
}

export default OilCard;