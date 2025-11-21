import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ticket, CheckCircle, QrCode } from 'lucide-react';

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get('http://localhost:5000/api/tickets/my', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setTickets(res.data))
    .catch(() => alert('Failed to load tickets'));
  }, []);

  return (
    <div className="container">
      <div className="page-title">
        <Ticket color="#34d399" /> My Wallet
      </div>
      
      {tickets.length === 0 ? (
        <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>
          <Ticket size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
          <p>No active tickets found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {tickets.map(t => (
            <div key={t.id} className="glass-card" style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              padding: '0', 
              borderLeft: '4px solid #facc15', 
              overflow: 'hidden'
            }}>
              
              {/* Left Stub: Seat Info */}
              <div style={{ 
                background: 'rgba(0,0,0,0.2)', 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minWidth: '120px',
                borderRight: '2px dashed rgba(255,255,255,0.1)'
              }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '1px' }}>Seat</span>
                <span style={{ fontSize: '2rem', fontWeight: '800', color: 'white' }}>{t.seat_number}</span>
              </div>

              {/* Middle: Match Info */}
              <div style={{ flex: 1, padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div style={{ fontSize: '0.8rem', color: '#34d399', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>
                    Confirmed Match
                   </div>
                   <h3 style={{ margin: '0', fontSize: '1.5rem', color: 'white' }}>Match #{t.match_id}</h3>
                   <p style={{ color: '#94a3b8', margin: '5px 0 0 0', fontSize: '0.9rem' }}>Ticket Reference: {t.id}</p>
                </div>
                
                {/* Right: Status & QR */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '8px' }}>
                    <QrCode size={40} color="black" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4ade80', fontSize: '0.9rem', fontWeight: '600' }}>
                    <CheckCircle size={14} /> {t.status}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyTickets;