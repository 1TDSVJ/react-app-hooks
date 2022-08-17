import React, { useState } from "react";
import ShowRepos from "../showRepos/ShowRepos";

const Repositorios = () => {
  const objEstilos = {
    noite: { backgroundColor: "#FF0000" },
    tarde: { backgroundColor: "#FFFF00" },
    manha: { backgroundColor: "#0000FF" },
  };
  const [repositorios, setRepositorios] = useState("1TDSVJ");
  let valorVariavel = "2022";
  const addRepo = () => {
    setRepositorios(repositorios + 1);
    valorVariavel += 5;
    console.log(valorVariavel);
  };

  return (
    <div>
      <h2
        style={{
          backgroundColor: "#00FF00",
          color: "#FF0000",
          textAlign: "center",
        }}
      >
        Exemplo de utilização de useState
      </h2>
      <p style={objEstilos.noite}>Meu repositório : {repositorios}</p>
      <p style={objEstilos.manha}>Minha Variável: {valorVariavel}</p>
      <button onClick={addRepo}>Add-Repo</button>

      <ShowRepos
        repositorios={repositorios}
        setRepositorios={setRepositorios}
        objEstilos={objEstilos}
      />
    </div>
  );
};

export default Repositorios;
