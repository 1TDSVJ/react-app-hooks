import React from "react"
import {Link} from "react-router-dom"
export default function Menu() {
    return(

        <header>
            <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/masculina">Moda Masculina</Link></li>
            <li><Link to="/feminina">Moda feminina</Link></li>
            <li><Link to="/infantil">Moda infantil</Link></li>
        </ul>
            </nav>
        </header>
    )
} 