import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLoja from '../home-loja/HomeLoja';
import ModaMasc from '../moda-masc/ModaMasc';
import ModaFem from '../moda-fem/ModaFem';
import ModaInf from '../moda-infant/ModaInf';
import Sobre from '../sobre/Sobre';
export default function Rotas() {
  return (
    <Routes>
      <Route path="/"element={<HomeLoja />} />
      <Route path="/modamasculina" element={<ModaMasc />} />
      <Route path="/modafeminina" element={<ModaFem />} />
      <Route path="/modainfantil" element={<ModaInf />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
