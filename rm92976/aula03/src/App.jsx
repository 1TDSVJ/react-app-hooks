import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'
import Menu from './components/menu/Menu'



export default function App() {
  return (
    <>
    
    <Menu/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/servicos' element={<Servicos/>}/> 

        
      </Routes>
    
    </>
  );
}