import React from 'react';
import img from '../img/feminino.jpg'

export default function ModaFem() {
  return (
    <section style={{textAlign: 'center', fontFamily: 'Courier'}}>
      <h1>Moda Feminina</h1>
      <div>
        <h3>Vestidos</h3>
        <figure>
          <img src={img} alt="mulher olhando vestido" style={{width:'30vw'}} />
          <figcaption>Edição limitada! Garanta já seu vestido</figcaption>
        </figure>
      </div>
    </section>
  );
}
