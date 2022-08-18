import React, { useEffect, useState } from 'react';

export default function ShowRepos(props) {
  const [newRepos, setNewRepos] = useState([]);

  useEffect(() => {
    carregaRepos();
  }, []);

  const carregaRepos = async () => {
    const resp = await fetch(
      'https://api.github.com/users/RafaRamosCosta/repos'
    );
    // parsemaneto dos dados
    const data = await resp.json();
    setNewRepos(data);
  };

  return (
    <>
      <h2>Lista de Repositórios</h2>
      <ul>
        {newRepos.map((repositorio) => 
          // é necessário passar uma unique key para cada elemento que será criado
          <li key={repositorio.id}>{repositorio.name}</li>
        )}
      </ul>
    </>
  );
}
