
import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [match, setMatch] = useState({
    team_a: '',
    team_b: '',
    match_date: '',
    venue: '',
    total_seats: ''
  });

  const handleChange = (e) => {
    setMatch({ ...match, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/matches', match, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Match added!');
    } catch (error) {
      console.error(error);
      alert('Failed to add match');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin: Add Match</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input name="team_a" placeholder="Team A" onChange={handleChange} required />
        <input name="team_b" placeholder="Team B" onChange={handleChange} required />
        <input name="match_date" type="datetime-local" onChange={handleChange} required />
        <input name="venue" placeholder="Venue" onChange={handleChange} required />
        <input name="total_seats" type="number" placeholder="Total Seats" onChange={handleChange} required />
        <button type="submit">Add Match</button>
      </form>
    </div>
  );
}

export default AdminDashboard;