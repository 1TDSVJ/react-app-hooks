import React, { useEffect } from 'react';

export default function ShowRepos(props) {
  useEffect(async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    props.setRepositorios(data);
  }, []);

  useEffect(() => {
    console.log('Renderizou o repositorio!');
  }, [props.repositorios]);

  return (
    <>
      <h3>Lista de Repositórios</h3>
      <p>{props.repositorios}</p>
      <button onClick={() => props.setRepositorios('Alterado no filho!')}>
        Alterar
      </button>
    </>
  );
}
