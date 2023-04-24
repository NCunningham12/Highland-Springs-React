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

  const clearForm = () => {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((singleInput) => (singleInput.value = ''));
  };

  const signUpSubmit = () => {
    const initialPass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm-password').value;

    if (
      verifyFirstName() === true &&
      verifyLastName() === true &&
      verifyUsername() === true &&
      verifyPassword() === true &&
      initialPass === confirmPass
    ) {
      Axios.post('http://localhost:3001/users', {
        first: firstName,
        last: lastName,
        username: username,
        password: password,
      }).then(() => {
        console.log('Username/Password Created');
        document.getElementById('output').innerHTML = '';
        document.getElementById('output-success').innerHTML =
          'Username/Password Created';
        setTimeout(() => {
          document.getElementById('output-success').innerHTML = '';
        }, '2000');
        setTimeout(() => {
          window.location.replace('http://localhost:3000/login');
        }, '2000');
      });

      clearForm();
    } else if (
      verifyFirstName() !== true ||
      verifyLastName() !== true ||
      verifyUsername() !== true
    ) {
      document.getElementById('output').innerHTML =
        'Fill in all required fields';
    } else if (verifyPassword() !== true) {
      document.getElementById('output').innerHTML =
        'Password does not meet the requirements';
    } else if (initialPass !== confirmPass) {
      document.getElementById('output').innerHTML = 'Passwords do not match';
    } else {
      document.getElementById('output').innerHTML = 'System Error';
    }
  };

  const showPassword = () => {
    let passInput = document.getElementById('password');
    let confInput = document.getElementById('confirm-password');

    if (passInput.type === 'password' && confInput.type === 'password') {
      passInput.type = 'text';
      confInput.type = 'text';
    } else {
      passInput.type = 'password';
      confInput.type = 'password';
    }
  };

  const verifyFirstName = () => {
    const firstName = document.getElementById('first-name').value;
    if (firstName === '') {
      document.getElementById('first-message').innerHTML = 'Required';
      return false;
    } else {
      document.getElementById('first-message').innerHTML = '';
      return true;
    }
  };

  const verifyLastName = () => {
    const lastName = document.getElementById('last-name').value;
    if (lastName === '') {
      document.getElementById('last-message').innerHTML = 'Required';
      return false;
    } else {
      document.getElementById('last-message').innerHTML = '';
      return true;
    }
  };

  const verifyUsername = () => {
    const username = document.getElementById('username').value;
    if (username === '') {
      document.getElementById('user-message').innerHTML = 'Required';
      return false;
    } else {
      document.getElementById('user-message').innerHTML = '';
      return true;
    }
  };

  const verifyPassword = () => {
    const password = document.getElementById('password').value;
    if (password === '') {
      document.getElementById('pass-message').innerHTML = 'Required';
      return false;
    }

    if (password.length < 6) {
      document.getElementById('pass-message').innerHTML =
        'Password must be at least 6 characters';
      return false;
    }

    if (password.length > 15) {
      document.getElementById('pass-message').innerHTML =
        'Passwords cannot contain more than 15 characters';
      return false;
    } else {
      document.getElementById('pass-message').innerHTML = '';
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
          <Link to="/login" className="loginRedirect">
            Log In
          </Link>
        </div>
        <hr />
        <div className="form">
          <form classname="inner-form" onSubmit={clearForm}>
            <div className="error-messages">
              <span id="first-message"></span>
              <span id="last-message"></span>
            </div>
            <div className="name-wrapper">
              <div className="name-inputs">
                <div className="input-field first-name">
                  <label for="first" />
                  <input
                    name="first"
                    id="first-name"
                    placeholder="First Name"
                    className="input"
                    required
                    onChange={(event) => {
                      setFirstName(event.target.value);
                      return verifyFirstName();
                    }}
                  />
                </div>
                <div className="input-field last-name">
                  <label for="last" />
                  <input
                    name="last"
                    id="last-name"
                    placeholder="Last Name"
                    className="input"
                    required
                    onChange={(event) => {
                      setLastName(event.target.value);
                      return verifyLastName();
                    }}
                  />
                </div>
              </div>
            </div>
            <span id="user-message"></span>
            <div className="input-field">
              <label for="username" />
              <input
                name="username"
                id="username"
                placeholder="Username"
                className="input"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                  return verifyUsername();
                }}
              />
            </div>
            <span id="pass-message"></span>
            <div className="input-field">
              <label for="password" />
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                className="input"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                  return verifyPassword();
                }}
              />
              <div className="input-field">
                <label for="confirm-password" />
                <input
                  name="confirm-password"
                  type="password"
                  id="confirm-password"
                  className="input"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" onClick={showPassword} />
                Show Password
              </div>
            </div>
            <br />
            <p id="output" className="output"></p>
            <p id="output-success" className="output-success"></p>
            <br />
            <div className="submit">
              <button type="button" onClick={signUpSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
