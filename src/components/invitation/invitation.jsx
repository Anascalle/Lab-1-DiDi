import React from 'react';
import "./invitation.css";

const Invitation = (props) => {
  return (
    <div className={`div-invitation ${props.className}`}>
      <div className="text-content">
        {props.title && <h2 className='text-title'>{props.title}</h2>}
        {props.description && (
          <ul>
            {props.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {props.imgSrc && <img src={props.imgSrc} alt="Building" className='invitation-img' />}
    </div>
  );
};

export default Invitation;
