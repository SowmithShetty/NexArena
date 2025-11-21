


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, ArrowRight } from 'lucide-react';

function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/matches')
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="page-title">
        <span style={{ borderBottom: '4px solid #3b82f6', paddingBottom: '5px' }}>Fixture List</span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {matches.map(match => (
          <div key={match.id} className="glass-card" style={{ overflow: 'hidden', transition: 'transform 0.3s' }}>
            {/* Team Header */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)', 
              padding: '1.5rem', 
              textAlign: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>{match.team_a}</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>VS</span>
                <span>{match.team_b}</span>
              </div>
            </div>

            {/* Match Details */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: '#cbd5e1' }}>
                <Calendar size={18} color="#60a5fa" />
                <span>{new Date(match.match_date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', color: '#cbd5e1' }}>
                <MapPin size={18} color="#34d399" />
                <span>{match.venue}</span>
              </div>
              
              <Link to={`/book/${match.id}`}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
                  <span>Book Now</span> <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;