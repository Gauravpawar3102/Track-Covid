import React from 'react';
import Card from '../components/Card';
function PreCautions() {
  return (
    <div className="precations-container">
      <h1>Safety Pre-Cautions</h1>
      <section className="precautions-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default PreCautions;
