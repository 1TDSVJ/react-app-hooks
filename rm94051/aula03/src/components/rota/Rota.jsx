import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Produtos from '../produtos/Produtos'
import Servicos from '../servicos/Servicos'

export default function Rota() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
    </Routes>
  )
}
