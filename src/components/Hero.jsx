import React from 'react';
import '../styles/hero.css';
function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1>Covid-19 Live News:Headlines</h1>
        <section className="hero-list">
          <ul>
            <li>
              Withdrawal of new Covid-19 guidelines 'extremely disappointing',
              says Rural Doctors Association
            </li>
            <li>
              The pandemic’s continued pressure on health-care professionals
              raises fear of suicides. One respiratory therapist’s death shows
              why.
            </li>
            <li>
              Multiple provinces considering allowing COVID positive health-care
              staff to work
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
export default Hero;
