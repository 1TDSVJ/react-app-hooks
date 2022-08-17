import React, { useEffect } from "react"

export default function ShowsRepos(props){

    useEffect(async ()=>{
        
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        props.setRepositorios(data)
    },[])
    useEffect(()=>{
        console.log('RENDERIZOU O REPOSITÓRIO!')
    },[props.repositorios])

    return(
        <div>
            <h2>Lista de Repositórios</h2>
            <p>{props.repositorios}</p>
            <button onClick={()=> props.setRepositorios("ALTERADO NO FILHO!")}>Alterar</button>


        </div>
    )
}