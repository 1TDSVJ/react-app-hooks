import React from "react";
import { useEffect } from "react";

const ShowRepos = (props) => {
  //useState
  //   let estilo;

  //   if (new Date().getHours() < 12) {
  //     estilo = props.objEstilos.manha;
  //   } else if (new Date().getHours() > 12 && new Date().getHours() < 18) {
  //     estilo = props.objEstilos.tarde;
  //   } else {
  //     estilo = props.objEstilos.noite;
  //   }

  useEffect(async () => {

    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    props.setRepositorios(data)
    
  }, []);

  useEffect(() => console.log("Renderizou o repositório"), [props.repositorios]);

  return (
    <div>
      <h2>Lista de Repositórios</h2>
      <p>{props.repositorios}</p>
      <button onClick={() => props.setRepositorios("Alterado no filho")}>
        Alterar
      </button>
    </div>
  );
};

export default ShowRepos();
