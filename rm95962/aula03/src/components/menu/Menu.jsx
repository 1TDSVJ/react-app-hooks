import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return(

        <header>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/protudos'>Produtos</Link></li>
            <li><Link to='/servicos'>Serviços</Link></li>
            </ul>
        </header>

    )
}