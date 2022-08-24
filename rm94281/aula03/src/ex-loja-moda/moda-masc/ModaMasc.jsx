import React from 'react';
import img from '../img/masculino.jpg';
export default function ModaMasc() {
  return (
    <section style={{textAlign: 'center', fontFamily: 'Courier'}}>
      <h1>Moda Masculina</h1>
      <div>
        <h3>Camisas Sociais</h3>
        <figure>
        <img src={img} alt="Homem pegando roupas" style={{width:'30vw'}}/>
          <figcaption>Camisas em até 30% de desconto!</figcaption>
        </figure>
      </div>
    </section>
  );
}
