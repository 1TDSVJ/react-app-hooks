import React from "react"
import { useEffect, useState } from "react"

export default function GithubUsers(){

    const [newUsers, setnewUsers] = useState([])

    useEffect( () => {
        carregaUsers()
    }, [])

    const carregaUsers = async ()=> {
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()
        setnewUsers(data)
    }

    return(
        <div>
            <h2>Lista de usuários</h2>
            <ul>
                {newUsers.map((user) =>
                    <li key={user.id}>
                        <figure>
                            <img src={user.avatar_url} alt="usuário do github" style={{width: '200px'}}/>
                            <figcaption>{user.login}</figcaption>
                        </figure> 
                    
                    </li>
                )}
            </ul>
        </div>
    )
}