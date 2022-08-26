import React from "react";
import modainf1 from "./.././img/modainf1.jpg";
import modainf2 from "./.././img/modainf2.jpg";

// import { Container } from './styles';
const modaInfantil = {
  backgroundColor: "#fc0",
  height: "200vh",
  textAlign: "center",
  color: "black",
};
function ModaInfantil() {
  return (
    <div style={modaInfantil}>
      <h1>Moda Infantil</h1>

      <figcaption>
        <h2>Moda Conceito 1</h2>

        <img src={modainf1} />
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
        <h2>Moda Conceito 2</h2>
        <img src={modainf2} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit facere
          eos suscipit. Quas, eius accusamus. Commodi laudantium tempora, ipsum
          sint quasi, quas exercitationem ab ad, necessitatibus reiciendis
          repellat repudiandaea quo? Mollitia, deserunt dolorum accusamus vel
          quisquam reprehenderit provident culpa eos quibusdam. Necessitatibus
          cum veritatis iusto dolore, minima obcaecati mollitia atque laborum
          quisquam provident, deleniti eveniet adipisci fugiat accusamus
          molestiae sit? Tempore, quisquam necessitatibus voluptatem nisi,
          molestiae minus quidem eligendi error vel deserunt eaque nesciunt sint
          ipsum quo sed nam ratione praesentium id quam distinctio illum
          provident repellendus! Vitae, ad rerum. Praesentium voluptatum unde
          ducimus veritatis, accusamus maiores omnis quae cum laudantium, iusto
          deserunt eveniet animi mollitia expedita! Voluptatibus deserunt optio
          eius? Non id voluptas delectus eaque amet impedit! Vel, ex.
        </p>
      </figcaption>
    </div>
  );
}

export default ModaInfantil;
