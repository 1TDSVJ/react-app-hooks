import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/servicos">Servicos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Menu;