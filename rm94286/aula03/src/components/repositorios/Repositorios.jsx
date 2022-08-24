import React, { useState } from 'react';
import ShowRepos from '../showRepos/ShowRepos';

export default function Repositorios() {
  const objEstilos = {
    noite: { backgroundColor: '#6c2ae7' },
    tarde: { backgroundColor: '#e26f4f' },
    manha: { backgroundColor: '#ebeb50' },
  };
  const [repositorios, setRepositorios] = useState('1TDSVJ');
  let valorVariavel = '2022';

  const alteraRepo = () => {
    setRepositorios(repositorios + 1);
    valorVariavel += 5;
    console.log(valorVariavel);
  };
  return (
    <div>
      <h2
        style={{
          backgroundColor: '#00ff00',
          color: '#ff0000',
          textAlign: 'center',
        }}
      >
        Exemplo de utilização do useState
      </h2>
      <p style={objEstilos.noite}>Meu repositório: {repositorios}</p>
      <p style={objEstilos.manha}>Minha variável: {valorVariavel}</p>
      <button onClick={() => alteraRepo()}>Altera Dados</button>

      <ShowRepos
        repositorios={repositorios}
        setRepositorios={setRepositorios}
        objEstilos={objEstilos}
      />
    </div>
  );
}