import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import ModaFeminina from '../modaFeminina/ModaFeminina'
import ModaInfantil from '../modaInfantil/ModaInfantil'
import ModaMasculina from '../modaMasculina/ModaMasculina'
import Sobre from '../sobre/Sobre'

export default function Rota() {

    {/*
    const grupo = [{
        foto: 'https://avatars.githubusercontent.com/u/101107763?v=4',
        nome: 'Luis Felipe Garcia Menezes',
        github: 'https://github.com/LuisFelipeGM',
        turma: '1TDSVJ'
      },
      {
        foto: 'https://avatars.githubusercontent.com/u/100133833?v=4',
        nome: 'Lucas Guerra De Azevedo Sardo',
        github: 'https://github.com/LucasGuerraS',
        turma: '1TDSVJ'
      },
      {
        foto: 'https://avatars.githubusercontent.com/u/76505066?v=4',
        nome: 'Pedro Victor Saraiva',
        github: 'https://github.com/Pedrodev3',
        turma: '1TDSVJ'
      },
      {
        foto: 'https://avatars.githubusercontent.com/u/101107856?v=4',
        nome: 'Pedro Chueiri',
        github: 'https://github.com/Pedrochueiri',
        turma: '1TDSVJ'
      },
      {
        foto: 'https://avatars.githubusercontent.com/u/86127662?v=4',
        nome: 'Daniel Henrique Alcântara Oliveira Martins',
        github: 'https://github.com/DaniHenriqueAOM',
        turma: '1TDSVJ'
      }]*/}

      const foto = ['https://avatars.githubusercontent.com/u/101107763?v=4', 'https://avatars.githubusercontent.com/u/100133833?v=4', 'https://avatars.githubusercontent.com/u/76505066?v=4', 'https://avatars.githubusercontent.com/u/101107856?v=4', 'https://avatars.githubusercontent.com/u/86127662?v=4']

      const nome = ['Luis Felipe Garcia Menezes', 'Lucas Guerra De Azevedo Sardo', 'Pedro Victor Saraiva', 'Pedro Chueiri', 'Daniel Henrique Alcântara Oliveira Martins']

      const github = ['https://github.com/LuisFelipeGM', 'https://github.com/LucasGuerraS', 'https://github.com/Pedrodev3', 'https://github.com/Pedrochueiri', 'https://github.com/DaniHenriqueAOM']

      const nickname = ['LuisFelipeGM', 'LucasGuerraS', 'Pedrodev3', 'Pedrochueiri', 'DaniHenriqueAOM']

      const turma = ['1TDSVJ', '1TDSVJ', '1TDSVJ', '1TDSVJ', '1TDSVJ']

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/moda-masculina" element={<ModaMasculina/>}/>
            <Route path="/moda-feminina" element={<ModaFeminina/>}/>
            <Route path="/moda-infantil" element={<ModaInfantil/>}/>
            <Route path="/sobre" element={<Sobre fotoProps={foto} 
                                                nomeProps={nome}
                                                gitProps={github} 
                                                turmaProps={turma}
                                                nicknameProps={nickname}/>}
                                                />
        </Routes>
    )
}