import React from "react";
import hom from "./.././img/hom.jpg";

export default function Home() {
  const home = {
    backgroundColor: "#f5f5",
    height: "70vh",
    textAlign: "center",
    color: "black",
  };
  return (
    <div style={home}>
      <figcaption>
        <h1>Bem vindo a Loja Moda</h1>
        <img src={hom}/>
        <p>A maior loja de artigos de moda do Brasil</p>
      </figcaption>
    </div>
  );
}
