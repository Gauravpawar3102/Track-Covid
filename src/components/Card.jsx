import React from 'react';
import Mask from '../resources/Mask.svg';
import '../styles/card.css';
function Card() {
  const text = 'Wear a mask';
  return (
    <React.Fragment>
      <div className="card-container">
        <img
          className="image"
          src="https://image.freepik.com/free-vector/man-wearing-adjustable-face-mask-strap_23-2148864726.jpg"
          alt="img"
        />
        <h3>{text}</h3>
      </div>
    </React.Fragment>
  );
}

export default Card;
