import React from 'react';
import "./card.css"
const Card = (props) => {
    return (
        <div className='div-card'>
          {props.imgSrc && <img src={props.imgSrc} alt="Card image" className='card-img'  />}
          {props.title && <h3>{props.title}</h3>}
          {props.description && <p>{props.description}</p>}
        </div>
      );
    };
    
    
    export default Card 
