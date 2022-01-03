import React from 'react';
import Country from './Country';
import '../styles/country.css';
function Data() {
  return (
    <div className="data-container">
      <div className="drop-down">
        <Country />
      </div>
    </div>
  );
}

export default Data;
