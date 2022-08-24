import React from "react";
import {Routes, Route } from 'react-router-dom';

import Menu from "./desafio/menu/Menu";
import Home from "./desafio/home/Home";
import Menu from "./desafio/rodape/Rodape";
import Produtos from "./desafio/modafeminino/ModaFeminina";
import Servicos from "./desafio/modamasculina/ModaMasculina";
import Servicos from "./desafio/modainfantil/ModaInfantil";
import Servicos from "./desafio/sobre/Sobre";

export default function App(){
    return(
        <>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/produtos" element={<ModaFeminina />}/>
            <Route path="/servicos" element={<ModaMasculina />}/>
            <Route path="/servicos" element={<ModaInfantil />}/>
            <Route path="/servicos" element={<Sobre />}/>
        </Routes>
        <Rodape />
    </>
    )
}

// const App = () => {
//     return(
//         <></>
//     )
// }

// export default App()

/*
        <BrowserRouter> 
            <Routes>
                <Route path="/caminho", element={componente}/>
            </Routes>
*/

/*
aula 04
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/produtos" element={<Produtos />}/>
                <Route path="/servicos" element={<Servicos />}/>
            </Routes>
        </>
*/