import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import volleyballImage from './People-beach-volleyball.webp'; 
import logo from './pngtree-volleyball-player-spiking-ball-crest-illustration-spiker-spike-vector-picture-image_9421056.png'; 


import About from './About';  
import Staff from './Staff';
import Programs from './Programs'; 
import Blog from './Blog';  
import Bookcourt from './Bookcourt'; 
import Bookclass from './Bookclass'; 
import Checkout from './Checkout'; 
import Confirmation from './Confirmation';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome-section">
        <h1>Welcome to Spiketacular Spikes!</h1>
        <p>Ottawa’s biggest volleyball club. We are open 24/7, open to all ages.</p>
      </div>
      <div className="photo-section">
        <img src={volleyballImage} alt="Volleyball" className="single-image" />
      </div>
      <div className="info-section">
        <div className="join-us">
          <h2>Want to join us?</h2>
          <p>At Spiketacular Spikes, we offer a variety of programs and classes with different skill levels.</p>
          <div className="button-group">
            <button className="info-button" onClick={() => navigate('/programs')}>View Programs</button>
            <button className="info-button" onClick={() => navigate('/bookclass')}>Book a Class</button>
          </div>
        </div>
        <div className="book-court">
          <h2>Want to book a court?</h2>
          <p>At Spiketacular Spikes, we offer 3 courts for you to book for you and your family and friends.</p>
          <div className="button-group">
            <button className="info-button" onClick={() => navigate('/about')}>View Courts</button>
            <button className="info-button" onClick={() => navigate('/book')}>Book a Court</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contacts">
          <h3>Contacts</h3>
          <p>Phone Number: 613 843 4328</p>
          <p>Email: spike@volleyball.ca</p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>2451 Riverside Dr K1H 7X7 Ottawa, Ontario</p>
        </div>
        <div className="hours">
          <h3>Open Hours</h3>
          <p>Open 24 hours</p>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="navbar-brand">
              <img src={logo} alt="Logo" className="logo" />
              Spiketacular Spikes
            </div>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/staff" className="nav-link">Staff</Link></li>
              <li><Link to="/programs" className="nav-link">Programs</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<Bookcourt />} /> {/* New route for booking courts */}
            <Route path="/bookclass" element={<Bookclass />} /> {/* New route for booking classes */}
            <Route path="/checkout" element={<Checkout />} /> {/* New route for checkout */}
            <Route path="/confirmation" element={<Confirmation />} /> {/* New route for confirmation */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
