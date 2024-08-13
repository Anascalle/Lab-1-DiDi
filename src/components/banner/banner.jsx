import React from 'react';
import "./banner.css"


const Banner = (props) => {
    return (
        <div className='div-banner'>
          {props.imgSrc && <img src={props.imgSrc} alt="background image" className='back-img' />}
          {props.title && <h1 className='banner-title'>{props.title}</h1>}
          {props.description && <p className='banner-text'>{props.description}</p>}
          <button className='buttoncss'>{props.buttontitle}

          </button>
        </div>
    );
};

export default Banner;
