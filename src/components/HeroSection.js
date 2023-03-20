import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import bgVideo from '../videos/course_footage1.mp4'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={bgVideo} className="course-footage" type='video/mp4' autoPlay loop muted />
      <h1>HIGHLAND SPRINGS VILLAGE<br /> GOLF COMMUNITY <hr /></h1> 
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET INFO
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH PROMO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
