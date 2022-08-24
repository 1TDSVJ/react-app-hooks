import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

    return (
        
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Produtos">Produtos</Link></li>
                    <li><Link to="/Servicos">Serviços</Link></li>
                </ul>
            </nav> 
        </header>
    )
}
