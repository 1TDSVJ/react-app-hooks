import React from 'react'
import modaMasc from '../img/modaMasc.jpg'
import jaquetas from '../img/jaquetas.jpg'

export default function ModaMasculina() {
  const img = {
    width: '50%'
  }
  const img2 = {
    width: '45%',
  }
  const h = {
    fontFamily: 'Monospace',
    textAlign: 'center'
  }
  const figure = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
  const descricao = {
    fontFamily: 'Monospace',
    textAlign: 'center',
    fontSize: '1.2rem'
  }
  const btn = {
    fontFamily: 'Monospace',
    border: '1px solid #f5a9',
    backgroundColor: '#f5f8',
    fontSize: '1.1rem',
    padding: '0.5rem',
  }
  const divBtn = {
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <main>
        <h1 style={h}>Para os Homens...</h1>
        <figure style={figure}>
            <img src={modaMasc} style={img} alt="Homen fazendo compras" />
            <figcaption>Seção masculina de nossa loja</figcaption>
        </figure>
        <h2 style={h}>Mais Vendido!</h2>
        <figure style={figure}>
            <img src={jaquetas} style={img2} alt="Cabideiro de jaquetas" />
            <figcaption>Seção de jaquetas</figcaption>
        </figure>
        <p style={descricao}>Jaquetas de couro importadas e da melhor qualidade. Para todas as ocasiões.</p>
        <p style={descricao}>Corra para garantir a sua!</p>
        <div style={divBtn}>
          <button style={btn}>Eu quero!</button>
        </div>
    </main>
  )
}
