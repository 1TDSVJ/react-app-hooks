import React, { useState, useEffect } from "react";

export default function GitHubUsers() {

    const [newUsers, setnewUsers] = useState([]);

    // useEffect vai executar a função no carregamento do componente
    // nesse caso, como dependeências não foram passadas, o useEffect só será executado quando o componente for renderizado
    useEffect(() => {
        carregaUsers()
    }, [])

    const carregaUsers = async () => {
        const resp = await fetch("https://api.github.com/users");
        const data = await resp.json();
        setnewUsers(data)
    }

    return(
        <div>
            <h2>Lista de Usuários</h2>
            <ul style={{ listStyle: 'none' }}>
                {newUsers.map((user) =>
                    <li key = {user.id}>
                        <figure>
                            <img src={user.avatar_url} alt="foto do usuário do gitHub, id: `${user.id}`" title={user.login} style = {{ width: "200px" }} />
                            <figcaption><a href={user.html_url}>{user.login}</a></figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
    )
}