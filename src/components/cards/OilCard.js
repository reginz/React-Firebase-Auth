import React,{useEffect, useState} from 'react';
import '../../styles/OilCard.css'

function OilCard(props) {
    const [color, setColor] = useState()

    useEffect(()=>{
        if(props.color === "purple"){
            setColor("#B682D5")
        }
        if(props.color === "yellow"){
            setColor("#F8E89C")
        }
        if(props.color==="pink"){
            setColor("#EBAFD1")
        }
        if(props.color === "green"){
            setColor("#95D6A6")
        }
    },[])
   
    var shadow = `0px 20px 12px -12px ${color}`

    return (
        <a href={'/oil-details/'+ props.route}>
            <div className='oil-card'
            style={{
                backgroundColor: color,
                boxShadow: shadow
            }}>
                <p className='card-title'>{props.name}</p>
                <p>family: {props.family}</p>
            </div>
        </a>
       
    );
}

export default OilCard;