<<<<<<< HEAD
import React from 'react'
import {Link} from 'react-router-dom'
export default function Menu() {
  return (
    
    <header>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
        </ul>
        </nav>
    </header>

  )
}
=======
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
>>>>>>> ddc76b05ba86b9b35ed9f142cb7a75316c68eeec
