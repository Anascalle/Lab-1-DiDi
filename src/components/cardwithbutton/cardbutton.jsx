import React from 'react';
import "./cardbutton.css";

const CardWithButton = (props) => {
    return (
        <div className='card-with-button'>
            {props.imgSrc && <img src={props.imgSrc} alt="Card image" className='card-img' />}
            {props.title && <h3>{props.title}</h3>}
            {props.description && <p>{props.description}</p>}
            {props.buttonTitle && (
                <button className='card-buttons'>
                    {props.buttonTitle}
                </button>
            )}
        </div>
    );
};

export default CardWithButton;
