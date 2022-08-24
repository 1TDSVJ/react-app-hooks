import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Produtos from "./components/Produtos/Produtos"
import Servicos from "./components/Servicos/Servicos"
import Menu from "./components/Menu/Menu"

export default function App(){

    return(
        <div>
            
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/produtos" element={<Produtos />}></Route>
                <Route path="/servicos" element={<Servicos />}></Route>
            </Routes>
            
        </div>
    )
}

// const App = () =>{
//     return(
//         <>

//         </>
//     )
// }

// export default App
