import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
import { signOut } from 'firebase/auth';

import { auth } from '../firebase-config';
import { useState, useEffect } from 'react';

function Header() {
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };
  useEffect((isAuth) => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

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

          {!localStorage.isAuth ? (
            <Link setIsAuth={setIsAuth} to="/login">
              <li>Login</li>
            </Link>
          ) : (
            <>
              <Link to="/Blogpost">
                <li>Blog</li>
              </Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
          )}
          <Link to="/contactus">
            <li>Contact-Us</li>
          </Link>
          <Link to="/Blog">
            <li>Create/Delete Post</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Header;
