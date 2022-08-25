import React from "react";
import { Link } from "react-router-dom";

const MenuModa = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/homeModa">Renner</Link>
        </li>
        <li>
          <Link to="/modaFeminina">Moda Feminina</Link>
        </li>
        <li>
          <Link to="/modaMasculina">Moda Masculina</Link>
        </li>
        <li>
          <Link to="/modaInfantil">Moda Infantil</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </header>
  );
}

export default MenuModa;