import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import ModaFeminina from '../modaFeminina/ModaFeminina';
import ModaMasculina from '../modaMasculina/ModaMasculina';
import Sobre from '../sobre/Sobre';

export default function Rotas() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/feminino' element={<ModaFeminina />}></Route>
        <Route path='/masculino' element={<ModaMasculina />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
    </Routes>
  );
}
