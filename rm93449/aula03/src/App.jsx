import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Produtos from "./components/produtos/Produtos"
import Servicos from "./components/servicos/Servicos"
import Menu from "./components/menu/Menu"
import ModaMasculina from "./components/modaMasculina/ModaMasculina"
import ModaFeminina from "./components/modaFeminina/ModaFeminina"
import ModaInfantil from "./components/modaInfantil/ModaInfantil"

export default function App(){
    
    return(
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/masculina" element={<ModaMasculina></ModaMasculina>}></Route>
                <Route path="/feminina" element={<ModaFeminina></ModaFeminina>}></Route>
                <Route path="/infantil" element={<ModaInfantil></ModaInfantil>}></Route>
            </Routes>
        
        </>
    )
}
