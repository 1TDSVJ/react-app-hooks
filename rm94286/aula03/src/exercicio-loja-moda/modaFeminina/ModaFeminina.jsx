import React from 'react'
import modaFem from '../img/modaFem.jpg'
import sandalhaSaltoF from '../img/sandalhaSaltoF.jpg'

export default function ModaFeminina() {
  const img = {
    width: '60%'
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
        <h1 style={h}>Para as mulheres...</h1>
        <figure style={figure}>
            <img src={modaFem} style={img} alt="Mulher fazendo compras" />
            <figcaption>Seção feminina de nossa loja</figcaption>
        </figure>
        <h2 style={h}>Mais Vendido!</h2>
        <figure style={figure}>
            <img src={sandalhaSaltoF} style={img2} alt="Sandalha com salto amarelo lima" />
            <figcaption>Nossa sandalha mais vendida</figcaption>
        </figure>
        <p style={descricao}>Sandalha feita com material importado da suécia e tecnologia para conforto. É a queridinha dos clientes!</p>
        <p style={descricao}>Adiquira já a sua!</p>
        <div style={divBtn}>
        <button style={btn}>Eu quero!</button>
        </div>
    </main>
  )
}
