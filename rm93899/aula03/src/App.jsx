import React from 'react'
import Repositorios from './components/repositorios/Repositorios'
import { useEffect } from 'react'
import GithubUsers from './components/githubUsers/GithubUsers'

export default function App() {
    return (
        <div>
            <h1>ESTUDO SOBRE HOOKS</h1>
            <GithubUsers />
        </div>
    )
}

// const App = () => {
//     return(
//         <>
//         </>
//     )
// }

// export default App;