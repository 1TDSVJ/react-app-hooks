import React, {useEffect,useState} from 'react'


export default function ShowRepos(props){

    const [newRepos, setnewRepos] = useState([])

    useEffect( () => {
        carregaRepos()
    }, [])

// ASYNCHRONOUS
    const carregaRepos = async()=>{
        const resp = await fetch("https://api.github.com/users/alecarlosjesus/repos")
        // PARSEAMENTO DOS DADOS
        const data = await resp.json()
        setnewRepos(data)
    }

    return(
        <div>
            <h2>Lista de Repositórios</h2>
            <ul>
                {newRepos.map((repositorio) =>
                    <li key={repositorio.id}>{repositorio.description}</li>
                )}
            </ul>
        </div>
    )
}