import React, {useEffect, useState} from "react";

export default function ShowRepos(props){

    const [newRepos, setnewRepos] = useState([]);


    useEffect(() => {
        carregaRepos();
    },[])

    const carregaRepos = async() =>{
        
        const response = await fetch("https://api.github.com/users/LuisFelipeGM/repos");
        // PARSEAMENTO DOS DADOS
        const data = await response.json()
        setnewRepos(data);

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