import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MensClub from './components/pages/MensClub';
import TravelClub from './components/pages/TravelClub';
import GolfShop from './components/pages/GolfShop';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Insert from './components/pages/Insert';
import LoginPage from './components/pages/LoginPage';
import Members from './components/pages/Members';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/mens-club" Component={MensClub} />
          <Route path="/travel-club" Component={TravelClub} />
          <Route path="/golf-shop" Component={GolfShop} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/login" Component={LoginPage} />
          <Route path='/add-member' Component={Insert} />
          <Route path='/members' Component={Members} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
