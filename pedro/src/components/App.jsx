import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./home/Home"
import Menu from "./menu/Menu"
import ModaFeminina from "./modafeminina/ModaFeminina"
import ModaInfantil from "./modainfantil/ModaInfantil"
import ModaMasculina from "./modamasculina/ModaMasculina"
import Sobre from "./sobre/Sobre"

export default function App() {

    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/modamasculina" element={<ModaMasculina/>}/>
                <Route path="/modafeminina" element={<ModaFeminina/>}/>
                <Route path="/modainfantil" element={<ModaInfantil/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </>
        
    )
}