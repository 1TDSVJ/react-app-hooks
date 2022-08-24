import React from "react"
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./components/home/home"
import Menu from "./components/menu/Menu"
import Produtos from "./components/produtos/Produtos"
import Servicos from "./components/produtos/servicos"

export default function App() {

    return (

        <>
        

        <Menu/>

        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Produtos</Link></li>
        </ul>
    
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="servicos" element={<Servicos/>}/>
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
