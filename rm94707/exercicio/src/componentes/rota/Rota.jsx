import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/home'
import ModaFeminina from '../modaFeminina/ModaFeminina'
import ModaInfantil from '../modaInfantil/ModaInfantil'
import ModaMasculina from '../modaMasculina/ModaMasculina'
import Sobre from '../sobre/Sobre'

export default function Rota() {

      const foto = ['https://avatars.githubusercontent.com/ViniciusReis2810']

      const nome = ['Vinicius Mota Dos Reis']

      const github = ['https://github.com/ViniciusRis2810']

      const nickname = ['ViniciusReis2810']

      const turma = ['1TDSVJ']

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/moda-masculina" element={<ModaMasculina/>}/>
            <Route path="/moda-feminina" element={<ModaFeminina/>}/>
            <Route path="/moda-infantil" element={<ModaInfantil/>}/>
            <Route path="/sobre" element={<Sobre fotoProps={foto}  nomeProps={nome} gitProps={github} turmaProps={turma} nicknameProps={nickname}/>} />
        </Routes>
    )
}