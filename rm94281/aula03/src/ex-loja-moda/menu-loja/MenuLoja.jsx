import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuLoja() {
  const menuStyles = {
    color: 'white',
  };
  return (
    <header>
      <nav>
        <ul style={menuStyles}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/modamasculina">Moda Masculina</Link>
          </li>
          <li>
            <Link to="/modafeminina">Moda Feminina</Link>
          </li>
          <li>
            <Link to="/modainfantil">Moda Infantil</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
