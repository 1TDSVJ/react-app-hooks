import React from 'react';
import Carros from './components/carros/Carros';
import Carterinha from './components/carterinha/Carterinha';
import Semaforo from './components/semaforo/Semaforo';

export default function App() {
  const carros = ['Fiat', 'Jaguar', 'Opala', 'Porsche', 'BMW', 'Chevette', 'Brasilia', 'Supra', 'Gol'];
  
  const alunos = [{
    fotoAluno: 'https://avatars.githubusercontent.com/u/101107856?s=400&u=8b6fcbc4229621bf8b728f3e6fbb3ca9f0664209&v=4',
    nomeAluno: 'Pedro Henrique Chueiri',
    rmAluno: '93939',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  }, 
  {
    fotoAluno: 'https://avatars.githubusercontent.com/u/100133833?v=4',
    nomeAluno: 'Lucas Guerra',
    rmAluno: '95084',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  },
  {
    fotoAluno: 'https://avatars.githubusercontent.com/u/101107763?v=4',
    nomeAluno: 'Luis Felipe Gomes',
    rmAluno: '94051',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  }]
  return (
    <>
      <h1>Pedro Henrique Chueiri RM93939 1TDSVJ</h1>
      <Semaforo />
      <Carros listaCarros={carros} />
      <Carterinha fotoAluno={alunos[0].fotoAluno} nomeAluno={alunos[0].nomeAluno} rmAluno={alunos[0].rmAluno} cursoAluno={alunos[0].cursoAluno} turma={alunos[0].turma}/>
      <Carterinha fotoAluno={alunos[1].fotoAluno} nomeAluno={alunos[1].nomeAluno} rmAluno={alunos[1].rmAluno} cursoAluno={alunos[1].cursoAluno} turma={alunos[1].turma}/>
      <Carterinha fotoAluno={alunos[2].fotoAluno} nomeAluno={alunos[2].nomeAluno} rmAluno={alunos[2].rmAluno} cursoAluno={alunos[2].cursoAluno} turma={alunos[2].turma}/>

    </>
  );
}