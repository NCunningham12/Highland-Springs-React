import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MensClub from './components/pages/MensClub';
import TravelClub from './components/pages/TravelClub';
import ProShop from './components/pages/ProShop';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

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
          <Route path="/pro-shop" Component={ProShop} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
