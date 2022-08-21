import React from "react"
import { Routes, Route } from 'react-router-dom'
import Alunos from "./components/alunos/Alunos"
import Home from "./components/home/Home"
import MainRoutes from "./components/routes/MainRoutes"
import ShowRepos from "./components/showRepos/ShowRepos"

export default function App() {

    return (

        <div>
            <h1>ESTUDO SOBRE HOOKS</h1>

            <MainRoutes />

            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aluno">Aluno</Link></li>
                <li><Link to="/repos">Repositorios</Link></li>
            </ul> */}

            {/* <GithubUsers /> */}
            {/* <Repositorios/>     */}
            {/* <Sem /> */}

        </div >

    )
}

// const App = () =>{
//     return(
//         <>

//         </>
//     )
// }

// export default App
