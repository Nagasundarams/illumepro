// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '88vh',
    width:'99%',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor:'grey',
  },
  header: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default NotFound;
