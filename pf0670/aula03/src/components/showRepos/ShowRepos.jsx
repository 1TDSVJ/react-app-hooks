import React, { useEffect, useState } from 'react'


export default function ShowRepos(props) {

    const [newRepos, setnewRepos] = useState([])

    useEffect(() => {
        carregaRepos()
    }, [])

    //ASYNCHRONOUS
    const carregaRepos = async () => {
        const resp = await fetch("https://api.github.com/users")
        //PARSEAMENTO DOS DADOS
        const data = await resp.json()

        setnewRepos(data)
    }

    return (
        <div>
            <h2>Lista de Repositórios</h2>
            <ul>
                {newRepos.map((repositorio) =>
                    <li key={repositorio.id}>
                        <figure>
                            <img src={repositorio.avatar_url} alt="" style={{ width: "200px" }} />
                            <figcaption><a href={repositorio.html_url}>{repositorio.login}</a></figcaption>
                        </figure>


                    </li>
                )}
            </ul>
        </div>
    )
}





/*
Exercício
1 - Crie um componente chamado GithubUsers.
2 - Torne o componente um filho de App.jsx
3 - Através das técnicas aprendidas na aula 03
 importe a lista de usuários do github de api.github.com/users, utilizando as seguintes chaves dos objetos.
 a - name
 b - avatar
4 - Formate cada um dos usuários com um bloco figure/img/figcaption, dentro de uma ul.
*/





















