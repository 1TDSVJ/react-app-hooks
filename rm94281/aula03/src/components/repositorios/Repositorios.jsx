import React, { useState } from 'react';

export default function Repositorios() {
  const [repositorios, setRepositorios] = useState('1TDSVJ');
  let valorVariavel = '2022';

  const alteraRepo = () => {
    setRepositorios(repositorios + 1);
    valorVariavel += 5;
    console.log(valorVariavel);
  };

  return (
    <>
      <h2>Exemplo de utilização de useState</h2>
      <p>Meu repositório: {repositorios}</p>
      <p>Minha variável: {valorVariavel}</p>
      <button onClick={() => alteraRepo('1TDSVJ')}>Add-Repo</button>
    </>
  );
}
