import React from 'react';
import loja from '../img/loja.jpg';

export default function Home() {
  return (
    <main>
      <h1>Seja bem vindo a Loja Moda!</h1>
      <figure>
        <img src={loja} alt="Imagem do corredor de nossa loja na Avenida Paulista" />
        <figcaption>Loja Moda na Avenida Paulista</figcaption>
      </figure>
    </main>
  );
}
