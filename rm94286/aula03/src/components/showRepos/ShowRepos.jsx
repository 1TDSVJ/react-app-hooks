import React, { useEffect, useState } from "react";

export default function ShowRepos() {
  const [newRepos, setNewRepos] = useState([]);

  useEffect(() => {
    carregaRepos();
  });

  const carregaRepos = async () => {
    const resp = await fetch(
      "https://api.github.com/users/LeonardoRCosta/repos"
    );
    const data = await resp.json();
    setNewRepos(data);
  };

  return (
    <div>
      <h2>Lista de Repositórios</h2>
      <ul>
        {newRepos.map((repositorio, i) => (
          <li key={i}>{repositorio.name}</li>
        ))}
      </ul>
    </div>
  );
}
