import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Join The Community Today!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require('../img/HS-sign-offset.JPG')}
              text="Friendly and knowledgable residents to help you with any questions you might have"
              label="Contact"
              path="/contact"
            />
            <CardItem
              src={require('../img/b-roll-bench.JPG')}
              text="Beautiful fairways surrounding a lake, nestled in a quiet retirement community"
              label="Information"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require('../img/tee-follow-thru.JPG')}
              text="A group of grumpy old men constantly arguing about balls"
              label="Mens Club"
              path="/mens-club"
            />
            <CardItem
              src={require('../img/putt-fountain-ball3.JPG')}
              text="Travel around the Inland Empire challenging geezers far and wide to see who is the ultimate PUTT-PUTT KING"
              label="Travel Club"
              path="/travel-club"
            />
            <CardItem
              src={require('../img/bronze-statue.JPG')}
              text="Your one-stop shop for all of your golfing and snacking needs"
              label="Golf Shop"
              path="/golf-shop"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
