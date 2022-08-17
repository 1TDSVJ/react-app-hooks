import React, { useEffect } from 'react';

export default function ShowRepos(props) {
  useEffect(async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    props.setRepositorios(data);
  }, []);

  useEffect(() => {
    console.log('Renderizou o Repositório!');
  }, [props.repositorios]);

  return (
    <div>
      <h2>Lista de Repositórios</h2>
      <p>{props.repositorios}</p>
      <button onClick={() => props.setRepositorios('Alterado no filho!')}>
        Alterar
      </button>
    </div>
  );
}
