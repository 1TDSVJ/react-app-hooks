import React from 'react';
import img from '../img/infantil.jpg'
export default function ModaInf() {
  return (
    <section style={{textAlign: 'center', fontFamily: 'Courier'}}>
      <h1>Moda Infantil</h1>
      <div>
        <h3>Pijamas</h3>
        <figure>
          <img src={img} alt="crianças se abraçando" style={{width:'30vw'}}/>
          <figcaption>Temos pijamas que brilham no escuro!</figcaption>
        </figure>
      </div>
    </section>
  );
}
