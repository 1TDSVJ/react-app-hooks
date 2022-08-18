import React from "react";
import GitHubUsers from "./components/githubusers/GitHubUsers";
import Repositorios from "./components/repositorios/Repositorios";

export default function App(){
    return(
        <div>
            <h1>Estudo sobre hooks</h1>
            <GitHubUsers />
        </div>
    )
}

// const App = () => {
//     return(
//         <></>
//     )
// }

// export default App()