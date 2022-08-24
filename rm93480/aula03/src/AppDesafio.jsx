//rfc -> cria estrutura básica

import React from "react"
import {Routes,Route} from "react-router-dom"
import HomeDesafio from "./componentsDesafio/homeDesafio/HomeDesafio"
import MenuDesafio from "./componentsDesafio/menuDesafio/MenuDesafio"
import ModaFeminina from "./componentsDesafio/modaFeminina/ModaFeminina"
import ModaMasculina from "./componentsDesafio/modaMasculina/ModaMasculina"
import ModaInfantil from "./componentsDesafio/modaInfantil/ModaInfantil"
import Sobre from "./componentsDesafio/sobre/Sobre"

export default function AppDesafio(){
    return(
        <>
        
            <MenuDesafio/>
            <Routes>
                <Route path="/" element={<HomeDesafio/>}/>
                <Route path="/modaFeminina" element={<ModaFeminina/>}/>
                <Route path="/modaMasculina" element={<ModaMasculina/>}/>
                <Route path="/modaInfantil" element={<ModaInfantil/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
    
        </>
        
    )
}

