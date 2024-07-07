import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bookclass.css';

function Bookclass() {
  const [selectedClass, setSelectedClass] = useState('');
  const [programLength, setProgramLength] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isValidDate, setIsValidDate] = useState(true);
  const navigate = useNavigate();

  const classOptions = ['Beginner', 'Intermediate', 'Pro'];
  const lengthOptions = [
    { value: '12 weeks', price: 300 },
    { value: '24 weeks', price: 550 },
    { value: '36 weeks', price: 700 },
  ];

  const getPrice = () => {
    const selectedOption = lengthOptions.find(option => option.value === programLength);
    return selectedOption ? selectedOption.price : 'XXX.XX';
  };

  const handleDateChange = (date) => {
    const selectedDay = new Date(date).getDay();
    const validDays = [2, 4, 0]; 
    if (validDays.includes(selectedDay)) {
      setIsValidDate(true);
      setStartDate(date);
    } else {
      setIsValidDate(false);
    }
  };

  const handleCheckout = () => {
    if (selectedClass && programLength && startDate && isValidDate) {
      navigate('/checkout');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="bookclass-page">
      <h2>Book a Practice Session</h2>
      <div className="form-group">
        <label>Class:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Dropdown menu</option>
          {classOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => handleDateChange(e.target.value)}
          disabled={!selectedClass || !programLength}
        />
        {!isValidDate && <p className="error-message">Classes are only available on Monday, Wednesday, and Friday.</p>}
      </div>
      <div className="form-group">
        <label>Program Length:</label>
        <select value={programLength} onChange={(e) => setProgramLength(e.target.value)}>
          <option value="">Dropdown Menu</option>
          {lengthOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.value} (${option.price})</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Total:</label>
        <p>${getPrice()}<br /><span className="price-note">*Depends on the program length</span></p>
      </div>
      <button
        className="checkout-button"
        onClick={handleCheckout}
        disabled={!selectedClass || !programLength || !startDate || !isValidDate}
      >
        Checkout
      </button>
    </div>
  );
}

export default Bookclass;
