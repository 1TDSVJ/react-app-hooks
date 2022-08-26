import React from "react";
import { Link } from 'react-router-dom'


export default function Menu() {
  const menu = {

    backgroundColor: '#D2691E',
    padding: '10px',
    margin: '0',
    textAlign: 'left',
    fontSize: '15px',
    color: 'black',
  }
  return (
    <div style={menu}>
      <header>
        <h1>MENU</h1>
        <ul>
          <li> <Link to="/">Home</Link>  </li>
          <li> <Link to="/ModaMasculina">Moda Masculina</Link></li>
          <li> <Link to="/ModaFeminina">Moda Feminina</Link></li>
          <li> <Link to="/ModaInfantil">Moda Infantil</Link></li>
          <li> <Link to="/Sobre">Sobre</Link></li>
        </ul>
      </header>
    </div>
  )
}