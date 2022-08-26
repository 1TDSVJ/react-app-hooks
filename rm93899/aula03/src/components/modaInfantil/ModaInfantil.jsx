import React from 'react'
import infantil from './../img/infantil.jpeg'

export default function ModaInfantil() {
  const modaInfantil = {
    backgroundColor: '#FFFF00',
    height: '105vh',
    textAlign: 'center',
    color: 'black'
  }
    return (
      <div style={modaInfantil}>
        <h1>Moda Infantil</h1>
        <img src={infantil} alt="" />
        <p>Roupas para pais e filhos! Modelos incríveis feitos para os mais diferentes estilos! Surpreenda a todos com a Stylist Premium!</p>
      </div>
    )
}