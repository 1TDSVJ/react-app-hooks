import React from 'react';

export default function ShowRepos(props) {
  let estilo;
  if (new Date().getHours() < 12) {
    estilo = props.objStyles.manha;
  } else if (new Date().getHours() > 12 && new Date().getHours() < 18) {
    estilo = props.objStyles.tarde;
  } else {
    estilo = props.objStyles.noite;
  }
  return (
    <>
      <h3 style={estilo}>Lista de Repositórios</h3>
      <p>{props.repositorios}</p>
      <button onClick={() => props.setRepositorios('Alterado no filho!')}>
        Alterar
      </button>
    </>
  );
}
