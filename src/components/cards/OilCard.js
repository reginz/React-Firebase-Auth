import React from 'react';
import '../../styles/OilCard.css'

function OilCard(props) {
    return (
        <a href={'/oil-details/'+ props.route}>
            <div className='oil-card m-3'
            style={{
                backgroundColor: "var(--purple)"
            }}>
                <p>{props.name}</p>
                <p>family: {props.family}</p>
            </div>
        </a>
       
    );
}

export default OilCard;