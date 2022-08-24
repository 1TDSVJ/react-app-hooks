import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const header = {
    backgroundColor: '#f2f3',
    color: '#fff',
    padding: '1rem'
  }
  const ul = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
  }
  const link = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Monospace',
  }
  return (
    <header style={header}>
      <nav>
        <ul style={ul}>
          <li>
            <Link to="/" style={link}>Home</Link>
          </li>
          <li>
            <Link to="/feminino" style={link}>Feminino</Link>
          </li>
          <li>
            <Link to="/masculino" style={link}>Masculino</Link>
          </li>
          <li>
            <Link to="/sobre" style={link}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
