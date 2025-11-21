
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>NexArena</h1>
      <ul style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        {token ? (
          <>
            <li><Link to="/my-tickets" style={styles.link}>My Tickets</Link></li>
            <li><button onClick={handleLogout} style={styles.btn}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
            <li><Link to="/register" style={styles.link}>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#1e00ffed', // Light background for contrast
    color: '#222',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#f2f2f2ff', // Matches red accent from fixture buttons
    letterSpacing: '1px'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#ffffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  },
  btn: {
    background: '#ff3434ff',
    color: '#fafafaff',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease'
  }
};

export default Navbar;