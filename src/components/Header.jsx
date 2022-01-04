import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
import { signOut } from 'firebase/auth';

import { auth } from '../firebase-config';
import { useState } from 'react';
function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

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
          {!localStorage.isAuth ? (
            <Link setIsAuth={setIsAuth} to="/login">
              <li>Login</li>
            </Link>
          ) : (
            <button onClick={signUserOut}>Log Out</button>
          )}
          <Link to="/contactus">
            <li>Contact-Us</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Header;
