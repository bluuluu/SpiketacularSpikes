import React, { useState } from 'react';
import './Programs.css'; 

function Programs() {
  const [isOpen, setIsOpen] = useState({
    competitive: false,
    recreational: false,
    classes: false,
    dropIn: false
  });


  const toggleSection = (section) => {
    setIsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="programs-page">
      <h1>Programs</h1>
      <div className="program-section">
        <button onClick={() => toggleSection('competitive')} className="accordion">
          Competitive League <span className="arrow">{isOpen.competitive ? '▲' : '▼'}</span>
        </button>
        <div className={`panel ${isOpen.competitive ? 'open' : ''}`}>
          <p>
            Our Competitive League is designed for players looking to compete at a higher level. 
            There are tryouts to join this league.
          </p>
          <ul>
            <li>Ages: 16+</li>
            <li>Price: $1000 for the season</li>
            <li>Level: All Levels</li>
            <li>Schedule: Monday - Thursday - Friday - Sunday</li>
          </ul>
        </div>
      </div>

      <div className="program-section">
        <button onClick={() => toggleSection('recreational')} className="accordion">
          Recreational League <span className="arrow">{isOpen.recreational ? '▲' : '▼'}</span>
        </button>
        <div className={`panel ${isOpen.recreational ? 'open' : ''}`}>
          <p>
            Join our Recreational League for a fun and engaging volleyball experience.
          </p>
          <ul>
            <li>Ages: 16+</li>
            <li>Price: $600 for the season</li>
            <li>Level: All Levels</li>
            <li>Schedule: Monday - Tuesday - Wednesday</li>
          </ul>
        </div>
      </div>

      <div className="program-section">
        <button onClick={() => toggleSection('classes')} className="accordion">
          Volleyball Classes/Lessons <span className="arrow">{isOpen.classes ? '▲' : '▼'}</span>
        </button>
        <div className={`panel ${isOpen.classes ? 'open' : ''}`}>
          <p>
            At Spikestacular Spikes, we offer a variety of classes/lessons managed by one of our beloved coaches.
            These classes can help everyone in different skill groups.
          </p>
          <ul>
            <li>Ages: 5+</li>
            <li>Price: $300.00 for 12 weeks</li>
            <li>Level: All Levels</li>
            <li>Schedule: Tuesday - Thursday - Sunday</li>
          </ul>
        </div>
      </div>

      <div className="program-section">
        <button onClick={() => toggleSection('dropIn')} className="accordion">
          Drop-in <span className="arrow">{isOpen.dropIn ? '▲' : '▼'}</span>
        </button>
        <div className={`panel ${isOpen.dropIn ? 'open' : ''}`}>
          <p>
            Our drop-in sessions are open to everyone.
          </p>
          <ul>
            <li>Ages: 12+</li>
            <li>Level: All Levels</li>
            <li>Schedule: Everyday 24/7</li>
          </ul>
        </div>
      </div>

      <div className="youtube-section">
        <h2>Don’t know where your skill stands?</h2>
        <p>Watch a YouTube video to check out where your skill stands!</p>
        <a href="https://www.youtube.com/watch?v=DRV05ew_cqI&t=283s" target="_blank" rel="noopener noreferrer">
          <div className="youtube-placeholder">
            <img src="https://img.youtube.com/vi/DRV05ew_cqI/0.jpg" alt="YouTube Video" className="youtube-thumbnail" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Programs;
