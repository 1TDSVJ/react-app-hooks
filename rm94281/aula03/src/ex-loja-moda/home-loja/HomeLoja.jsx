import React from 'react';
import img from '../img/loja.jpg'
export default function HomeLoja() {
  return (
    <main style={{textAlign: 'center', fontFamily:'Courier'}}>
      <h1>Seja bem vindo a Loja Moda!</h1>
      <p>A loja dos seus sonhos...</p>
      <figure>
        <img src={img} alt="Loja de roupa" style={{width:'30vw'}}/>
      </figure>
    </main>
  );
}
