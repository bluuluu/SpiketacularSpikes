import React, { useState } from 'react';
import './Staff.css'; 

import image1 from './1331736876.avif';
import image2 from './636277790365561229-IMG-2097.webp';

const staffMembers = [
  { name: "John John", role: "Manager", level: "Recreational" },
  { name: "Kimmy Tim", role: "Manager", level: "Competitive" },
  { name: "Gil Albert", role: "Manager", level: "Competitive" },
  { name: "Chim Dim", role: "Coach", level: "Competitive" },
  { name: "Lucy Nucy", role: "Coach", level: "Competitive" },
  { name: "Kim Kim", role: "Coach", level: "Competitive" },
  { name: "Son Sonny", role: "Coach", level: "Recreational" },
  { name: "Jim Jum", role: "Coach", level: "Recreational" },
  { name: "Lola Bola", role: "Manager", level: "Recreational" }
];

const staffImages = [image1, image2];

function getRandomImage() {
  return staffImages[Math.floor(Math.random() * staffImages.length)];
}

function Staff() {
  const [filters, setFilters] = useState({
    role: {
      Coach: false,
      Manager: false
    },
    level: {
      Recreational: false,
      Competitive: false
    }
  });

  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: {
        ...filters[type],
        [value]: !filters[type][value]
      }
    });
  };

  const filteredStaff = staffMembers.filter(member => {
    const roleFilter = filters.role.Coach || filters.role.Manager;
    const levelFilter = filters.level.Recreational || filters.level.Competitive;

    const roleMatch = !roleFilter || filters.role[member.role];
    const levelMatch = !levelFilter || filters.level[member.level];

    return roleMatch && levelMatch;
  });

  return (
    <div className="staff-page">
      <div className="filter-section">
        <h3>Filter by Staff</h3>
        <div className="filters">
          <div>
            <p>Role:</p>
            <label>
              <input
                type="checkbox"
                checked={filters.role.Coach}
                onChange={() => handleFilterChange("role", "Coach")}
              /> Coach
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.role.Manager}
                onChange={() => handleFilterChange("role", "Manager")}
              /> Manager
            </label>
          </div>
          <div>
            <p>Level:</p>
            <label>
              <input
                type="checkbox"
                checked={filters.level.Recreational}
                onChange={() => handleFilterChange("level", "Recreational")}
              /> Recreational
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.level.Competitive}
                onChange={() => handleFilterChange("level", "Competitive")}
              /> Competitive
            </label>
          </div>
        </div>
      </div>
      <div className="staff-container">
        {filteredStaff.map(member => (
          <div key={member.name} className="staff-card">
            <div className="staff-photo">
              <img src={getRandomImage()} alt="Staff" />
            </div>
            <div className="staff-info">
              <p>Name: {member.name}</p>
              <p>Role: {member.role}</p>
              <p>Level: {member.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
