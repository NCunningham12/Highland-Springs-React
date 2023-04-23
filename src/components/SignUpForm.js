import React, { useState } from 'react';
// import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let output = document.getElementById('output');

  const clearForm = () => {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((singleInput) => (singleInput.value = ''));
    output.innerHTML += 'Username/Password Created';
  };

  const signUpSubmit = () => {
    Axios.post('http://localhost:3001/users', {
      firstname: firstName,
      lastName: lastName,
      username: username,
      password: password,
    }).then(() => {
      console.log('Username/Password Created');
    });

    clearForm();
  };

  const showPassword = () => {
    let passInput = document.getElementById('password');
    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  };

  const verifyPassword = () => {
    const password = document.getElementById('password').value;
    if (password === '') {
      document.getElementById('message').innerHTML = 'Must fill in password';
      return false;
    }

    if (password.length < 6) {
      document.getElementById('message').innerHTML =
        'Password must be at least 6 characters';
      return false;
    }

    if (password.length > 15) {
      document.getElementById('message').innerHTML =
        'Passwords cannot contain more than 15 characters';
      return false;
    } else {
      document.getElementById('message').innerHTML = 'Valid';
    }
    return true;
  };

  return (
    <div className="sign-up-form">
      <div className="form-container">
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <div className="subtext">
          <h4>Already a member?</h4>
          <Link to="/users/login" className="loginRedirect">
            Log In
          </Link>
        </div>
        <div className="form">
          <form onSubmit={clearForm}>
            <div className="name-inputs">
              <div className="input-field">
                <label for="first-game" />
                <input
                  name="first-game"
                  id="first-name"
                  placeholder="First Name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <label for="last-name" />
                <input
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input-field">
              <label for="username" />
              <input
                name="username"
                id="username"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <label for="password" />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  return verifyPassword()
                }}
              />
              <span id="message"></span>
              <div className="input-field">
                <label for="confirm-password" />
                <input
                  name="confirm-password"
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" onClick={showPassword} />
                Show Password
              </div>
            </div>
            <div className="submit">
              <button type="button" onClick={signUpSubmit}>
                Sign Up
              </button>
            </div>
            <p id="output"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
