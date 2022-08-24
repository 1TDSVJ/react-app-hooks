import React, { useEffect, useState } from 'react'

export default function GithubUsers() {

    const [listaUsers, setListaUsers] = useState([])

    useEffect(() => {
        carregaListaUsers()
    }, [])

    const [buscador, setBuscador] = useState('')

    const carregaListaUsers = async () => {
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()
        setListaUsers(data)
    }


    return (
        <div>
            <h2>Lista de usuários do Github</h2>

            <div>
                BUSCA  :<input type="text" name="search" onChange={e => setBuscador(e.target.value)} value={buscador} />
            </div>

            <ul style={{ listStyle: 'none' }} >
                {listaUsers.map((user) =>
                    <li key={user.id}>
                        <figure>
                            <img src={user.avatar_url} alt="usuário do github id`${user.id}`" title={user.login} style={{ width: '200px' }} />
                            <figcaption><a href={user.html_url}>{user.login}</a></figcaption>
                        </figure>
                    </li>
                )}
            </ul>

        </div>
    )
}
