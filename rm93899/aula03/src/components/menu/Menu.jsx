import React from 'react'
import {Link} from 'react-router-dom'

function menu() {
  return (
    <header>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Servicos</Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default menu;