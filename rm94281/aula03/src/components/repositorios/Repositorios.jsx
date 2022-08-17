import React, { useState } from 'react';
import ShowRepos from '../showRepos/ShowRepos';
export default function Repositorios() {
  const [repositorios, setRepositorios] = useState('1TDSVJ');
  let valorVariavel = '2022';

  const objStyles = {
    noite: { backgroundColor: '#3f5bf5' },
    tarde: { backgroundColor: '#f86942' },
    manha: { backgroundColor: '#32e7ff' },
  };

  const alteraRepo = () => {
    setRepositorios(repositorios + 1);
    valorVariavel += 5;
    console.log(valorVariavel);
  };

  return (
    <>
      <h2
        style={{
          backgroundColor: '#00ff00',
          color: '#ff0000',
          textAlign: 'center',
        }}
      >
        Exemplo de utilização de useState
      </h2>
      <p style={objStyles.noite}>Meu repositório: {repositorios}</p>
      <p style={objStyles.tarde}>Minha variável: {valorVariavel}</p>
      <button onClick={() => alteraRepo('1TDSVJ')}>Alterar dados</button>

      <ShowRepos
        repositorios={repositorios}
        setRepositorios={setRepositorios}
        objStyles={objStyles}
      />
    </>
  );
}
