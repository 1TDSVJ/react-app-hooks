import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuDesafio() {
  const estiloNav={
    listStyle:"none",
    textDecoration: 'none',
    backgroundColor:"#f7edcd",
    fontSize:"20px"
  }
  const imagesCss={
    maxWidth:"10%",
    maxHeight:"10%",
    width:"auto",
    height:"auto",
  }

  return (
    <header>
        <nav>
          <ul style={estiloNav}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/modaFeminina'>Moda Feminina</Link></li>
            <li><Link to='/modaMasculina'>Moda Masculina</Link></li>
            <li><Link to='/modaInfantil'>Moda Infantil</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
          </ul>
          
        </nav>
        
    </header>
    
  )
}
