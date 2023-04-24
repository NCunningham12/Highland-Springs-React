import React, { useState } from 'react';
import './LoginForm.css';
import Axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then(() => {
      setTimeout(() => {
        window.location.replace('http://localhost:3000');
      }, '2000');
    });
  };

  const showPassword = () => {
    let passInput = document.getElementById('password');

    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <form className="login-form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="form-inputs">
              <input
                name="username"
                id="username"
                type="text"
                placeholder="Username"
                className="username input"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                className="password input"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" onClick={showPassword} /> Show Password
            </div>
            <div className="submit">
              <button className='login-button' onClick={loginSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
