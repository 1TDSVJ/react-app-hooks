import React from "react";
import modafem1 from "./.././img/modafem1.jpg";
import modafem2 from "./.././img/modafem2.jpg";

// import { Container } from './styles';
const modaFeminina = {
  backgroundColor: "#f5f",
  height: "330vh",
  textAlign: "center",
  color: "black",
};
function ModaFeminina() {
  return (
    <div style={modaFeminina}>
      <h1>Moda Feminina</h1>

      <figcaption>
        <h2>Moda Feminina Conceito 1</h2>
        <img src={modafem1} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          numquam tempora laudantium quam dignissimos totam voluptatibus vero.
          Odit nemo quasi pariatur odio est ab! Provideant dicta consequuntur
          autem impedit omnis. Vero, eaque alias iure quam nam fuga similique
          magni tenetur debitis veniam officiis quasi, vel excepturi dolorem
          ratione libero possimus tempora inventore? Quia soluta commodi
          laboriosam hic expedita quam eius! Assumenda ipsum omnis officiis
          cupiditate architecto labore natus quod sapiente voluptate incidunt
          totam sunt est optio voluptatibus non eligendi vero suscipit possimus,
          illum tempora laudantium saepe? Assumenda eaque voluptatum molestiae?
          Ratione deleniti sunt vitae pariatur doloribus blanditiis velit quidem
          nemo cupiditate dolores libero sapiente veniam voluptatem ducimus
          aliquid enim quaerat obcaecati fugiat, illum harum ipsam doloremque in
          quisquam. Consequatur, quae.
        </p>
      </figcaption>

      <figcaption>
        <h2>Moda Feminina Conceito 2</h2>
        <img src={modafem2} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          numquam tempora laudantium quam dignissimos totam voluptatibus vero.
          Odit nemo quasi pariatur odio est ab! Provident dicta consequuntur
          autem impedit omnis. Vero, eaque alias iure quam nam fuga similique
          magni tenetur debitis veniam officiis quasi, vel excepturi dolorem
          ratione libero possimus tempora inventore? Quia soluta commodi
          laboriosam hic expedita quam eius! Assumenda ipsum omnis officiis
          cupiditate architecto labore natus quod sapiente voluptate incidunt
          totam sunt est optio voluptatibus non eligendi vero suscipit possimus,
          illum tempora laudantium saepe? Assumenda eaque voluptatum molestiae?
          Ratione deleniti sunt vitae pariatur doloribus blanditiis velit quidem
          nemo cupiditate dolores libero sapiente veniam voluptatem ducimus
          aliquid enim quaerat obcaecati fugiat, illum harum ipsam doloremque in
          quisquam. Consequatur, quae.
        </p>
      </figcaption>

    </div>
  );
}

export default ModaFeminina;
