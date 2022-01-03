import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import '../styles/precautions.css';

const Card = (props) => {
  const { title, img } = props;
  return (
    <div className="card-container">
      <img
        className="image"
        // src="https://image.freepik.com/free-vector/man-wearing-adjustable-face-mask-strap_23-2148864726.jpg"
        src={img}
        alt="img"
      />
      <h3>{title}</h3>
    </div>
  );
};

function PreCautions() {
  return (
    <div className="precautions-container">
      <h1>Safety Pre-Cautions</h1>
      <section className="precautions-grid">
        <Card
          title="Wear a mask"
          img="https://image.freepik.com/free-vector/man-wearing-adjustable-face-mask-strap_23-2148864726.jpg"
        />
        <Card
          title="Social Distancing"
          img="https://image.freepik.com/free-vector/social-distancing-concept-illustration_114360-1763.jpg"
        />
        <Card
          title="Sanitize Hands"
          img="https://image.freepik.com/free-vector/hand-sanitizer-illustration-concept_23-2148487313.jpg"
        />
      </section>
    </div>
  );
}

export default PreCautions;
