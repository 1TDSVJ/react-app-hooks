import React, { useEffect, useState } from "react";

export default function ShowRepos() {
  const [newRepos, setNewRepos] = useState([]);

  useEffect(() => {
    carregaRepos();
  },[]); // Quando colocamos esses colchetes de dependência, ele vai executar o useEffect apenas uma vez, quando o componente for montado.
         // O famoso componentDidMount.

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
        {newRepos.map((repositorio, i) => <li key={repositorio.id}>{repositorio.name}</li>)}
      </ul>
    </div>
  );
}
