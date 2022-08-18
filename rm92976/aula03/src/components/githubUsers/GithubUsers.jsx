import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function GithubUsers(props){
    const [listaUsers, setListaUsers] = useState([])

    useEffect(() => {
        carregaListaUsers()
    }, [])

    const carregaListaUsers = async() => {
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()

        setListaUsers(data)
    }

    return (
        <div>
         <h2>Lista de Usuários do GitHub</h2>
             <ul style={{listaStyle: 'none'}}>
                 {listaUsers.map((user) =>
                    <li key={user.id}>
                    <figure>
                        <img src={user.avatar_url} alt="usuario do github id ${user.id}" title='' style={{
                            width: '200px',
                        }}/>
                        <figcaption> <a href={user.html_url}> {user.login} </a> 
                            </figcaption>
                    </figure>
                </li>
                 )}
             </ul>
        </div>
      )
}  

