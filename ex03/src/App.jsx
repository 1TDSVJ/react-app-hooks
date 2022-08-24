import React from 'react';
import Carros from './components/carros/Carros';
import Carterinha from './components/carterinha/Carterinha';
import Semaforo from './components/semaforo/Semaforo';

export default function App() {
  const carros = ['Fusca', 'Brasilia', 'Opala', 'Chevette', 'Ferrari', 'Porsche', 'Jaguar', 'Supra', 'BMW', 'Gol'];
  
  const alunos = [{
    fotoAluno: 'https://avatars.githubusercontent.com/u/80916930?v=4',
    nomeAluno: 'Rafael Ramos Costa',
    rmAluno: '94281',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  }, 
  {
    fotoAluno: 'https://avatars.githubusercontent.com/u/80916905?v=4',
    nomeAluno: 'Leonardo Ramos Costa',
    rmAluno: '94286',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  },
  {
    fotoAluno: 'https://avatars.githubusercontent.com/u/97682988?v=4',
    nomeAluno: 'Heitor Borba Marini',
    rmAluno: '94379',
    cursoAluno: 'ADS',
    turma: '1TSDVJ',
  }]
  return (
    <>
      <h1>RAFAEL RAMOS COSTA RM94281 1TDSVJ</h1>
      <Semaforo />
      <Carros listaCarros={carros} />
      <Carterinha fotoAluno={alunos[0].fotoAluno} nomeAluno={alunos[0].nomeAluno} rmAluno={alunos[0].rmAluno} cursoAluno={alunos[0].cursoAluno} turma={alunos[0].turma}/>
      <Carterinha fotoAluno={alunos[1].fotoAluno} nomeAluno={alunos[1].nomeAluno} rmAluno={alunos[1].rmAluno} cursoAluno={alunos[1].cursoAluno} turma={alunos[1].turma}/>
      <Carterinha fotoAluno={alunos[2].fotoAluno} nomeAluno={alunos[2].nomeAluno} rmAluno={alunos[2].rmAluno} cursoAluno={alunos[2].cursoAluno} turma={alunos[2].turma}/>

    </>
  );
}