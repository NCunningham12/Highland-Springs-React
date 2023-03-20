import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Club Newsletter for all of your HSV news
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Site Links</h2>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Men's Club</Link>
            <Link to="/">Travel Club</Link>
            <Link to="/">Pro Shop</Link>
            <Link to="/">Sign-Up</Link>
          </div>
          <div className="footer-link-items">
            <h2>Golf</h2>
            <Link to="/">Tournaments</Link>
            <Link to="/">Leaderboard</Link>
            <Link to="/">Handicaps</Link>
            <Link to="/">Flight Information</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Other Links</h2>
            <Link to="/">Link #1</Link>
            <Link to="/">Link #2</Link>
            <Link to="/">Link #3</Link>
            <Link to="/">Link #4</Link>
            <Link to="/">Link #5</Link>
            <Link to="/">Link #6</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to='/'>
              <img src={require('../img/HSV4.png')} className='footer-logo-img' alt='HSV logo' />
            </Link>
          </div>
          <small className="website-rights">HSVGC © 2023</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="social-icon-link instagram"
              to='/'
              target='_blank'
              aria-label='instagram'
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link youtube"
              to='/'
              target='_blank'
              aria-label='YouTube'
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link className="social-icon-link twitter"
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
