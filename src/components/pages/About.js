import React from 'react';
import '../../App.css';
import { Button } from '../Button.js';

export default function About() {
  return (
    <>
      <div className="about">
      <h1 className="about-header">ABOUT</h1>
        <div className="about-container">
          <p className="about-blurb">
            Nestled in the heart of Cherry Valley, Highland Springs Village is a
            retirement community that is teeming with avid golf enthusiasts. Our
            course is a 9-hole executive course with a variety of hole types that
            will continually push your game further. There are weekly Tournaments
            that are held here, as well as many other events, including our Club
            Chamionship Tournament! Between our well-stocked and knowledgable Pro
            Shop, our endless bevy of old-timers who can "tell you a thing or two"
            about how to golf, and unlimited access to our fantastic course,
            Highland Springs Village is the premier destination retirement
            community for you to truly up your game!
            <br />
            <br />
            If you are interested to find out more about joining the community,
            send us your information and someone will contact you
          </p>
        </div>
        <div className="about-btns-container">
          <Button
            className="about-btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Get More Info
          </Button>
        </div>
      </div>
    </>
  );
}
