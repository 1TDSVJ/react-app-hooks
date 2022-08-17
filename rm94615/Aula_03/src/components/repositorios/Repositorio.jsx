import React, {useState} from "react"

export default function Repositorio(){

    const [repositorios, setRepositorios] = useState([])

    return(
        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositório: {repositorios}</p>
            <button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button>
        </div>
    )
} 
