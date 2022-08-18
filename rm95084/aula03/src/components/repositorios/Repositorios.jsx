import React, { useState } from "react";
import ShowRepos from "../showRepos/ShowRepos";

export default function Repositorios() {
  const objEstilos = {
    noite: { backgroundColor: "#FF0000" },
    tarde: { backgroundColor: "#FFF000" },
    manha: { backgroundColor: "#0000FF" },
  };

  const [repositorios, setRepositorios] = useState([]);
  let valorVariavel = "2022";

  const alteraRepo = () => {
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
        Exemplo de utilização do useState
      </h2>
      <p style={objEstilos.noite}>Meu repositório : {repositorios}</p>
      <p style={objEstilos.manha}>Minha Variável: {valorVariavel}</p>

      <button onClick={() => alteraRepo()}>Altera Dados</button>

      <ShowRepos
        repositorios={repositorios}
        setRepositorios={setRepositorios}
        objEstilos={objEstilos}
      />
    </div>
  );
}
