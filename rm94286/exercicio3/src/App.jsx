import React from 'react'
import Semaforo from './components/semaforo/Semaforo'
import Carros from './components/carros/Carros'
import Carteirinha from './components/carteirinha/Carteirinha'

export default function App() {
    const cars = ['Uno', 'Gol', 'Fiesta', 'Palio', 'Corsa', 'Celta', 'Onix', 'HB20', 'Fox', 'Nivus']
    const carteirinhas = [
      {
        nome: 'Leonardo Ramos Costa',
        rm: '94286',
        curso: 'ADS',
        turma: '1TDSVJ',
        imagem: 'https://avatars.githubusercontent.com/u/80916905?v=4'
    },
    {
      nome: 'Rafael Ramos Costa',
      rm: '94281',
      curso: 'ADS',
      turma: '1TDSVJ',
      imagem: 'https://avatars.githubusercontent.com/u/80916930?v=4'
    },
    {
      nome: 'Mateus Costa Leme',
      rm: '93782',
      curso: 'ADS',
      turma: '1TDSVJ',
      imagem: 'https://avatars.githubusercontent.com/u/101108090?v=4'
    },
    {
      imagem: 'https://avatars.githubusercontent.com/u/97682988?v=4'
    }
  ]
  return (
    <>
        <h1>Leonardo Ramos Costa  RM: 94286  1TDSVJ</h1>
        <Semaforo /> 
        <Carros listaCarros={cars}/>
        <Carteirinha carteirinha={carteirinhas[0]}/>
        <Carteirinha carteirinha={carteirinhas[1]}/>
        <Carteirinha carteirinha={carteirinhas[2]}/>
        <Carteirinha carteirinha={carteirinhas[3]}/>
    </>
  )
}
