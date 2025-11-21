


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, ArrowRight, Ticket } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', { email, password })
      .then(res => {
        alert('Login successful');
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      backgroundImage: 'url("https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1920&q=80")', // Night Stadium Lights
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.6)' }}></div>

      <div style={{ 
        position: 'relative',
        zIndex: 10,
        width: '100%', 
        maxWidth: '450px', 
        background: 'rgba(30, 41, 59, 0.75)', 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        <div className="text-center mb-8">
          <div style={{ 
            width: '70px', height: '70px', 
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', 
            borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.4)'
          }}>
            <Ticket size={32} color="white" />
          </div>
          <h2 style={{ color: 'white', fontWeight: '800', fontSize: '2rem', marginBottom: '0.5rem' }}>Match Day</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Sign in to access your premium seats</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#cbd5e1', fontSize: '0.9rem' }}>Email</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <User size={18} style={{ position: 'absolute', left: '16px', color: '#94a3b8' }} />
              <input 
                type="email" 
                placeholder="fan@example.com" 
                onChange={e => setEmail(e.target.value)} 
                required 
                className="input-field"
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#cbd5e1', fontSize: '0.9rem' }}>Password</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', color: '#94a3b8' }} />
              <input 
                type="password" 
                placeholder="••••••••" 
                onChange={e => setPassword(e.target.value)} 
                required 
                className="input-field"
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', justifyContent: 'center' }}>
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
          New to the club? <Link to="/register" style={{ color: '#60a5fa', fontWeight: '600', textDecoration: 'none' }}>Join now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;