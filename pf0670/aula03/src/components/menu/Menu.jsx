import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const menu = {
      backgroundColor: '#8baced',
      color: '8baced',
      
      
      
}

export default function Menu() {
    return(
      <header style={menu}>
           <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/masculina">Moda Masculina</Link></li>
                    <li><Link to="/feminina">Moda Feminina</Link></li>
                    <li><Link to="/infantil">Moda Infantil</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
             </ul>
     
      </header>


      



)




}