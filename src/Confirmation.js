import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css'; 
import checkmarkImage from './White_check_mark_in_dark_green_rounded_square.svg.png'; 

function Confirmation() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-header">
        <h2>CONFIRMATION</h2>
      </div>
      <div className="confirmation-content">
        <div className="checkmark-container">
          <img src={checkmarkImage} alt="Checkmark" className="checkmark-image" />
        </div>
        <div className="confirmation-details">
          <h3>Payment has been accepted</h3>
          <p>Transaction Number: N8J9N0K02</p>
          <h3>Player Information</h3>
          <p>Name: XXXXXXX XXXXX</p>
          <p>Phone Number: XXX-XXX-XXXX</p>
          <p>Email Address: XXXX@XXX.com</p>
          <button className="return-button" onClick={handleReturnHome}>Return to Home</button>
        </div>
      </div>
      <div className="footer">
        <h3>Any Questions?</h3>
        <p>Call us: 613 843 4328</p>
        <p>Email us: spike@volleyball.ca</p>
      </div>
    </div>
  );
}

export default Confirmation;
