import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"
import Feminina from "./components/feminina/Feminina"
import Infantil from "./components/infantil/Infantil"
import Sobre from "./components/sobre/Sobre"
import Masculina from "./components/masculina/Masculina"
import Rodape from "./components/rodape/Rodape"




export default function App(){

    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/masculina' element={<Masculina/>}/>
            <Route path='/feminina' element={<Feminina/>}/>
            <Route path='/infantil' element={<Infantil/>}/>
            <Route path='/sobre' element={<Sobre/>}/>

        </Routes>
        <Rodape/>

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
