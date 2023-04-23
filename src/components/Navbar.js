import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={require('../img/HSV4.png')}
              width="70px"
              alt="HS Logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/mens-club"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Men's Club
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/travel-club"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Travel Club
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/golf-shop"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Golf Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/users"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP / LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
