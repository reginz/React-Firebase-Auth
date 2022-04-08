import React from 'react';

function GlossaryCard(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p className='gray-p pt-3'>{props.meaning}</p>
        </div>
    );
}

export default GlossaryCard;