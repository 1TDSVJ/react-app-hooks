import React from 'react';
import modamas1 from './.././img/modamas1.jpg'
import modamasc2 from './.././img/modamasc2.jpg'

// import { Container } from './styles';

const modaMasculina = {
backgroundColor: '#fb7',
height: '180vh',
textAlign: 'center',
color:'black'
}
function ModaMasculina() {
  return (
  <div style={modaMasculina}>
    <h1>Moda Masculina</h1>
   <figcaption>
        <h2>Moda Masculina Conceito 1</h2>

        <img src={modamas1} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          expedita ullam ipsam eveniet nulla unde, eaque, veritatis fugit itaque
          ut illum tempore, deserunt dolore blanditiis vel animi voluptatibus
          incidunt obcaecati! Nam beatae fugit et quae nesciunt obcaecati aut
          voluptatem perspiciatis perferendis. Nesciunt at laborum quia aliquam,
          voluptatem aspernatur corrupti officia quasi exercitationem.
          Reiciendis aut excepturi dolorem, cum ducimus et sint? Non explicabo,
          deserunt, dolorem laborum eum sint nam incidunt dolores rerum quis
          sed, suscipit maiores ipsa unde cupiditate. Vel expedita animi alias
          magnam necessitatibus voluptatem obcaecati omnis at quod ea? Omnis
          doloremque odio, nisi dignissimos consequatur mollitia accusantium
          officiis sunt minima tempora voluptatum, voluptas ex similique
          architecto quo molestias cupiditate. Explicabo dolores quae itaque
          nobis in ipsum accusamus, assumenda ipsa.
        </p>
      </figcaption>

      <figcaption>
        <h2>Moda Masculina Conceito 2</h2>

        <img src={modamasc2} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          expedita ullam ipsam eveniet nulla unde, eaque, veritatis fugit itaque
          ut illum tempore, deserunt dolore blanditiis vel animi voluptatibus
          incidunt obcaecati! Nam beatae fugit et quae nesciunt obcaecati aut
          voluptatem perspiciatis perferendis. Nesciunt at laborum quia aliquam,
          voluptatem aspernatur corrupti officia quasi exercitationem.
          Reiciendis aut excepturi dolorem, cum ducimus et sint? Non explicabo,
          deserunt, dolorem laborum eum sint nam incidunt dolores rerum quis
          sed, suscipit maiores ipsa unde cupiditate. Vel expedita animi alias
          magnam necessitatibus voluptatem obcaecati omnis at quod ea? Omnis
          doloremque odio, nisi dignissimos consequatur mollitia accusantium
          officiis sunt minima tempora voluptatum, voluptas ex similique
          architecto quo molestias cupiditate. Explicabo dolores quae itaque
          nobis in ipsum accusamus, assumenda ipsa.
        </p>
      </figcaption>
   </div>
  )
}

export default ModaMasculina;