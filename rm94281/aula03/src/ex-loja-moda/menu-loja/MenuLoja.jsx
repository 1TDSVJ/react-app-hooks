import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuLoja() {
  const headerStyles = {
    backgroundColor: 'purple',
    padding:'1rem',
    fontFamily: 'Monospace',
  }
  const ulStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    listStyle: 'none',
  };
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    textTransform: 'uppercase'
  }
  return (
    <header style={headerStyles}>
      <nav>
        <ul style={ulStyles}>
          <li>
            <Link to="/" style={linkStyles}>HOME</Link>
          </li>
          <li>
            <Link to="/modamasculina" style={linkStyles}>Moda Masculina</Link>
          </li>
          <li>
            <Link to="/modafeminina" style={linkStyles}>Moda Feminina</Link>
          </li>
          <li>
            <Link to="/modainfantil" style={linkStyles}>Moda Infantil</Link>
          </li>
          <li>
            <Link to="/sobre" style={linkStyles}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
