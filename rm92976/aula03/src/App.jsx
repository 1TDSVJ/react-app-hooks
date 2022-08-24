import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homeloja from "./desafio/home/Home-loja";
import Menuloja from "./desafio/menu-loja/Menuloja";
import Rodape from './desafio/rodape/Rodape'
import ModaMasculina from "./desafio/modaMasculina/ModaMasculina";
import ModaFeminina from "./desafio/modaFeminina/ModaFeminina";
import ModaInfantil from './desafio/modaInfantil/ModaInfantil';
import Sobre from './desafio/sobre/Sobre';



export default function App() {
  return (
    <>
    
    <Menuloja/>

      <Routes>
        <Route path='/' element={<Homeloja/>}/>
        <Route path='/modaMasculina' element={<ModaMasculina/>}/>
        <Route path='/modaFeminina' element={<ModaFeminina/>}/> 
        <Route path="/modaInfantil" element={<ModaInfantil/>}/>
        <Route path="/sobre" element={<Sobre/>}/>


        
      </Routes>

      <Rodape/>
      
      </>
      
  );
}
