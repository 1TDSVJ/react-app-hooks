import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feminino">Feminino</Link>
          </li>
          <li>
            <Link to="/masculino">Masculino</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
