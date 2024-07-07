import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvs, setCvs] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  const validateCardNumber = (number) => {
    return /^\d{16}$/.test(number);
  };

  const validateExpiryDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/([2-9][3-9])$/;
    return regex.test(date);
  };

  const formatExpiryDate = (date) => {
    if (date.length === 4) {
      return `${date.substring(0, 2)}/${date.substring(2, 4)}`;
    }
    return date;
  };

  const validateCvs = (number) => {
    return /^\d{3}$/.test(number);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber) &&
      validateCardNumber(cardNumber) &&
      validateExpiryDate(expiryDate) &&
      validateCvs(cvs)
    ) {
      navigate('/confirmation');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const isFormValid = 
    firstName &&
    lastName &&
    validateEmail(email) &&
    validatePhoneNumber(phoneNumber) &&
    validateCardNumber(cardNumber) &&
    validateExpiryDate(expiryDate) &&
    validateCvs(cvs);

  useEffect(() => {
    if (expiryDate.length === 4) {
      setExpiryDate(formatExpiryDate(expiryDate));
    }
  }, [expiryDate]);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleConfirmOrder}>
        <div className="cart-summary">
          <h3>Cart</h3>
          <p>#Item 1</p>
          <p>Price: $XXX.XX</p>
          <p>Total: $XXX.XX</p>
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <div className="input-group">
            <label>First name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Last name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Phone number</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength="10" required />
          </div>
        </div>
        <div className="payment-info">
          <h3>Payment Information</h3>
          <div className="input-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              required
            />
          </div>
          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              maxLength="5"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="input-group">
            <label>CVS</label>
            <input
              type="text"
              value={cvs}
              onChange={(e) => setCvs(e.target.value)}
              maxLength="3"
              required
            />
          </div>
        </div>
        <div className="checkout-buttons">
          <button type="button" onClick={() => navigate('/')}>Cancel Order</button>
          <button type="submit" disabled={!isFormValid}>Confirm Order</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
