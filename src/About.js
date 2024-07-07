import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './About.css'; 
import spikeStadium from './maxresdefault.jpg'; 
import spikeBeach from './200.jpg';
import spikeCourt from './pvs.jpg';

function About() {
  const growthData = [
    { year: 2010, Players: 1003 },
    { year: 2011, Players: 1502 },
    { year: 2012, Players: 2103 },
    { year: 2013, Players: 2703 },
    { year: 2014, Players: 3503 },
    { year: 2015, Players: 4403 },
    { year: 2016, Players: 5504 },
    { year: 2017, Players: 6704 },
    { year: 2018, Players: 8004 },
    { year: 2019, Players: 9403 },
    { year: 2020, Players: 10903 },
    { year: 2021, Players: 12504 },
    { year: 2022, Players: 14250 },
    { year: 2023, Players: 16003 },
    { year: 2024, Players: 17905 },
  ];

  const [startYear, setStartYear] = useState(2010);
  const [endYear, setEndYear] = useState(2024);

  const filteredData = growthData.filter(data => data.year >= startYear && data.year <= endYear);
  const averagePlayers = Math.round(filteredData.reduce((sum, data) => sum + data.Players, 0) / filteredData.length);
  const totalPlayers = filteredData.reduce((sum, data) => sum + data.Players, 0);

  return (
    <div className="about-page">
      <div className="about-section">
        <h2>Spikestacular Spike</h2>
        <p>Ottawa’s Biggest volleyball club. Train with the best of the best</p>
        <h3>Open Hours</h3>
        <p>Open 24 hours</p>
        <h3>Contacts</h3>
        <p>Phone Number: 613 843 4328</p>
        <p>Email: spike@volleyball.ca</p>
        <h3>Location</h3>
        <p>2451 Riverside Dr K1H 7X7 Ottawa, Ontario</p>
        <div className="maps-link">
          <a href="https://www.google.com/maps/place/2451+Riverside+Dr+K1H+7X7+Ottawa,+Ontario" target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
      </div>
      <div className="courts-section">
        <h3>Our Courts</h3>
        <div className="courts-images">
          <div className="court">
            <img src={spikeStadium} alt="Spike Stadium" className="court-photo" />
            <p className="court-name">Spike Stadium</p>
          </div>
          <div className="court">
            <img src={spikeBeach} alt="Spike Beach" className="court-photo" />
            <p className="court-name">Spike Beach</p>
          </div>
          <div className="court">
            <img src={spikeCourt} alt="Spike Court" className="court-photo" />
            <p className="court-name">Spike Court</p>
          </div>
        </div>
        <h3>How to book a court?</h3>
        <Link to="/book" className="book-button">Book Court</Link>
      </div>
      <div className="growth-section">
        <h3>Our Growth Over the Years</h3>
        <div className="filter-form">
          <label>
            Start Year:
            <input type="number" value={startYear} onChange={(e) => setStartYear(Number(e.target.value))} min="2010" max="2024" />
          </label>
          <label>
            End Year:
            <input type="number" value={endYear} onChange={(e) => setEndYear(Number(e.target.value))} min="2010" max="2024" />
          </label>
        </div>
        <div className="growth-data">
          {filteredData.map((data, index) => (
            <div key={index} className="growth-item">
              <p>{data.year}</p>
              <p>{data.Players} Players</p>
            </div>
          ))}
        </div>
        <div className="average-players">
          <h4>Average Players: {averagePlayers}</h4>
        </div>
        <div className="total-players">
          <h4>Total Players: {totalPlayers}</h4>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Players" fill="#223c47" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default About;
