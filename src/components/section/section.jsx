import React from 'react';
import "./section.css"

const Sections = (props) => {
    return (
      <div className='div-section' style={props.style}>
          {props.title && <h3>{props.title}</h3>}
          {props.description && <p>{props.description}</p>}
          <button className={props.buttonClass}>
            {props.buttontitle}
          </button>
        </div>
    );
};

export default Sections;
