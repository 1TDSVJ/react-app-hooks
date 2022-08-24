import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'

export  default function App() {
    return(
        <>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>}/> 
                <Route path='/servicos' element={<Servicos/>}/> 
            </Routes>
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