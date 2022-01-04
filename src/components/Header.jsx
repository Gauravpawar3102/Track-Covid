import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <FontAwesomeIcon className="logo-icon" size="2x" icon={faVirus} />
        <h1 className="Logo-text">Covid-19</h1>
      </div>
      <section className="menu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>

          <li>Contact-Us</li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
