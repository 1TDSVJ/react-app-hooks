import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from "./components/menu/Menu"
import Rodape from "./components/rodape/Rodape"
import Home from "./components/home/Home"
import ModaMasculina from "./components/modaMasculina/ModaMasculina"
import ModaFeminina from "./components/modaFeminina/ModaFeminina"
import ModaInfantil from "./components/modaInfantil/ModaInfantil"
import Sobre from "./components/sobre/Sobre"


export default function App(){

    return(
        <>
  <Menu/>
  <Rodape/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ModaMasculina" element={<ModaMasculina/>}/>
    <Route path="/ModaFeminina" element={<ModaFeminina/>}/>
    <Route path="/ModaInfantil" element={<ModaInfantil/>}/>
    <Route path="/Sobre" element={<Sobre/>}/>
    <Route path="/" element={<Rodape/>}/>


  </Routes>
        </>
    )
}

// const App = () =>{
//     return(
//         <>

//         </>
//     )
// }

// export default App
