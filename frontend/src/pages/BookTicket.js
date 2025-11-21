import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CreditCard, Trophy, Armchair } from 'lucide-react';

function BookTicket() {
  const { matchId } = useParams();
  const [seat, setSeat] = useState('');
  const navigate = useNavigate();

  const handleBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please login first');
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/tickets/book', {
        match_id: matchId,
        seat_number: seat
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Ticket booked successfully!');
      navigate('/my-tickets');
    } catch (err) {
      alert('Booking failed. Seat might be taken.');
    }
  };

  return (
    <div className="container" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-card" style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        maxWidth: '900px', 
        width: '100%', 
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.15)'
      }}>
        
        {/* Left Side: Visuals */}
        <div style={{ 
          flex: '1', 
          backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/82/50/75/360_F_482507577_ZKZbEMEvYyXHeJHCNCJy2FfTPgebxODq.jpg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '450px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617 10%, transparent 100%)' }}></div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>
              <Trophy size={14} /> CHAMPIONS NIGHT
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 10px 0', color: 'white' }}>Match Day Live</h2>
            <p style={{ color: '#94a3b8', margin: 0 }}>Secure your spot in the heart of the action.</p>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div style={{ flex: '1', padding: '3rem', background: 'rgba(15, 23, 42, 0.95)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>Select Seats</h2>
          
          {/* Seating Map */}
          <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
            <img 
              src="https://sydneyfc.com/wp-content/uploads/sites/2/2022/09/SEAT-MAP-Allianz_Stadium.jpg?w=750" 
              alt="Seating View" 
              style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', opacity: 0.8 }}
            />
            <div style={{ 
              position: 'absolute', bottom: 0, left: 0, right: 0, 
              padding: '8px', background: 'rgba(0,0,0,0.7)', 
              fontSize: '0.8rem', textAlign: 'center', color: '#94a3b8' 
            }}>
              Interactive Stadium Map
            </div>
          </div>

          <form onSubmit={handleBook}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '10px', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '600' }}>Seat Number</label>
              <div style={{ position: 'relative' }}>
                <Armchair size={20} style={{ position: 'absolute', left: '15px', top: '15px', color: '#64748b' }} />
                <input
                  className="input-field"
                  type="number"
                  placeholder="e.g. B-42"
                  value={seat}
                  onChange={e => setSeat(e.target.value)}
                  required
                  style={{ paddingLeft: '3rem', fontSize: '1.1rem', fontWeight: '600' }}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
              <CreditCard size={20} /> Confirm & Pay
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default BookTicket;