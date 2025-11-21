
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/register', form)
      .then(() => {
        alert('Registered successfully');
        navigate('/login');
      })
      .catch(() => alert('Registration failed'));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      // Updated background image URL below
      backgroundImage: 'url("https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1920&q=80")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(2, 6, 23, 0.7)' }}></div>

      <div style={{ 
        position: 'relative',
        zIndex: 10,
        width: '100%', 
        maxWidth: '450px', 
        background: 'rgba(30, 41, 59, 0.65)', 
        backdropFilter: 'blur(16px)', 
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        <div className="text-center mb-6">
          <div style={{ 
            width: '60px', height: '60px', 
            background: 'linear-gradient(135deg, #10b981, #059669)', 
            borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            margin: '0 auto 1rem auto',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
          }}>
            <UserPlus size={28} color="white" />
          </div>
          <h2 style={{ color: 'white', fontWeight: '800', fontSize: '1.75rem' }}>Join NexArena</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Unlock your access to premium matches</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#94a3b8' }} />
              <input 
                className="input-field"
                placeholder="Full Name" 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                required 
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#94a3b8' }} />
              <input 
                className="input-field"
                type="email" 
                placeholder="Email Address" 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                required 
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#94a3b8' }} />
              <input 
                className="input-field"
                type="password" 
                placeholder="Create Password" 
                onChange={e => setForm({ ...form, password: e.target.value })} 
                required 
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
            Create Account <ArrowRight size={18} />
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#34d399', fontWeight: '600', textDecoration: 'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;