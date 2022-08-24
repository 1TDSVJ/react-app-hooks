import React from 'react';
import loja from '../img/loja.jpg';

export default function Home() {
  const figure = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
  const img = {
    width: '60%',
  }
  const h1 = {
    fontFamily: 'Monospace',
    textAlign: 'center'
  }
  const descricao = {
    fontFamily: 'Monospace',
    textAlign: 'center',
    fontSize: '1.2rem'
  }
  return (
    <main>
      <h1 style={h1}>Seja bem vindo a Loja Moda!</h1>
      <figure style={figure}>
        <img src={loja} style={img} alt="Imagem do corredor de nossa loja na Avenida Paulista" />
        <figcaption>Loja Moda na Avenida Paulista</figcaption>
      </figure>
      <p style={descricao}>Estamos na Avanida Paulista, 1823, venha nos conhecer!</p>
      <p style={descricao}>Somos a sua loja!</p>
    </main>
  );
}
