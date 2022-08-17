import React, { useState } from "react";

const Repositorios = () => {
  const [repositorios, setReposiorios] = useState("1TDSVJ");
  let valorVariavel = "2022"
  const addRepo = () => {
    setReposiorios(repositorios + 1);
    valorVariavel += 5;
    console.log(valorVariavel);
  };

  return (
    <div>
      <h2>Exemplo de utilização de useState</h2>
      <p>Meu repositório : {repositorios}</p>
      <p>Minha Variável: {valorVariavel}</p>
      <button onClick={addRepo}>Add-Repo</button>
    </div>
  );
};

export default Repositorios;
