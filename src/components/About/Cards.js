import React from 'react';
import './Card.css';
function Cards({image, description}) {
    return (
        <div className="Card-container">
            <img src={image}/>
            <p>{description}</p>
        </div>
    );
}

export default Cards;