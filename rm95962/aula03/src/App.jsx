import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'

export  default function App() {
    return(
        <>
        <BrowserRouter>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/protudos'>Produtos</Link></li>
            <li><Link to='/servicos'>Serviços</Link></li>
        </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>}/> 
                <Route path='/servicos' element={<Servicos/>}/> 
            </Routes>
        </BrowserRouter>
        </>
    )
}

// const App = () => {
    // return(
        // <>

        // </>
    // )
// }

// export default App 