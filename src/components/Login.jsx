import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };
  return (
    <div className="login-page">
      <p>Sign In with Google to Continue </p>
      <button onClick={signInWithGoogle} className="login-with-google-btn">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
