import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Produtos from "../produtos/Produtos";
import Servicos from "../sevicos/Servicos";

export default function Rotas() {

  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/servicos" element={<Servicos />} />
    </Routes>
  )
}
