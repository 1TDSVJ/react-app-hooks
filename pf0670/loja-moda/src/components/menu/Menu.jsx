import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


export default function Menu() {


    return(

      <header>

       
           <ul>
            
            <li> <Link to="/">Home</Link>  </li>
            <li> <Link to="/ModaMasculina">Moda Masculina</Link>  </li>
            <li> <Link to="/ModaFeminina">Moda Feminina</Link>  </li>
            <li> <Link to="/ModaInfantil">Moda Infantil</Link>  </li>
            <li> <Link to="/Sobre">Sobre</Link>  </li>
              
            </ul>
      
      </header>


      



)




}