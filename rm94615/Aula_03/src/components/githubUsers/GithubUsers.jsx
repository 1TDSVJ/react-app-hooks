import React from "react"
import { useEffect, useState } from "react"

export default function GithubUsers(){

    const [newUsers, setNewUsers] = useState([])

    useEffect( ()=>{
        carregaUsers()
    },[])

    const carregaUsers = async () => {
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()
        setNewUsers(data)
    }

    return(
        <div>
            <h2>Lista de usuarios do GitHub</h2>
            <ul>
                {newUsers.map((user) =>
                    <li key={user.id}>
                        <figure>
                            <img src={user.avatar_url} alt="Usuário do Github" />
                            <figcaption><p>{user.login}</p></figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
    )
}