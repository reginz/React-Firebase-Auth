import React from 'react';
import '../../styles/OilCard.css'

function OilCard(props) {
    if(props.color === "purple"){
        var color = "#B682D5"
    }
    if(props.color === "yellow"){
        var color = "#F8E89C"
    }
    if(props.color==="pink"){
        var color = "#EBAFD1"

    }
    if(props.color === "green"){
        var color = "#95D6A6"
    }

    return (
        <a href={'/oil-details/'+ props.route}>
            <div className='oil-card'
            style={{
                backgroundColor: color,
                
            }}>
                <p>{props.name}</p>
                <p>family: {props.family}</p>
            </div>
        </a>
       
    );
}

export default OilCard;