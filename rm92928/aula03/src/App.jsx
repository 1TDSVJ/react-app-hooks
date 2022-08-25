import React from "react";
import {Routes, Route } from 'react-router-dom';

import Menu from "./desafio/menu/Menu";
import Home from "./desafio/home/Home";
import Rodape from "./desafio/rodape/Rodape";
import ModaFeminina from "./desafio/modafeminina/ModaFeminina";
import ModaMasculina from "./desafio/modamasculina/ModaMasculina";
import ModaInfantil from "./desafio/modainfantil/ModaInfantil";
import Sobre from "./desafio/sobre/Sobre";

export default function App(){
    return(
        <>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/modafeminina" element={<ModaFeminina />}/>
            <Route path="/modamasculina" element={<ModaMasculina />}/>
            <Route path="/modainfantil" element={<ModaInfantil />}/>
            <Route path="/sobre" element={<Sobre />}/>
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