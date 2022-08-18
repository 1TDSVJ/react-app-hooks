import React from "react"
import { useEffect } from "react"

export default function ShowRepos(props){

    const [newRepos, setNewRepos] = React.useState([])

    useEffect( ()=>{
        carregaRepos()
    },[])

    useEffect(()=>{
        console.log("Renderizou o repositório")
    },[props.repositorios])

    const carregaRepos = async () => {
        const response = await fetch("https://api.github.com/users/diego3g/repos")
        const data = await response.json()
        setNewRepos(data)
    }

    return(
        <div>
            <h2>Lista de repositórios</h2>
            <p>{props.repositorios}</p>

            <ul>
                {newRepos.map(repositorio =>
                    <li key={repositorio.id}>{repositorio.name}</li>
                )}
            </ul>
        </div>
    )
}
