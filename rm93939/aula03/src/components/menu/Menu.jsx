import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



export default function Menu() {
    return(
      <header>
           <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/servicos">Servicos</Link></li>
             </ul>
     
      </header>


      



)




}