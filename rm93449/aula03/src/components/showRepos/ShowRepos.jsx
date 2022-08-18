import React from "react"
import { useEffect, useState } from "react"

export default function ShowRepos(props){
    
    const [newRepos, setnewRepos] = useState([])

    useEffect( () => {
        carregaRepos()
    },[])

    const carregaRepos = async ()=> {
        const resp = await fetch("https://api.github.com/users/alecarlosjesus/repos")
        const data = await resp.json()
        setnewRepos(data)
    }

    return(
        <div>
            <h2>Lista de Repositórios</h2>
            <ul>
                {newRepos.map((repositorio, i) =>
                    <li key={i}>{repositorio.name}</li>
                )}
            </ul>
        </div>
    )
}