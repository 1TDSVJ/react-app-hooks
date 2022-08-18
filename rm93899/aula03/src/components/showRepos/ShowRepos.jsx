import React, { useEffect, useState } from 'react'


export default function ShowRepos(props) {

    const [newRepos, setnewRepos] = useState([])

    useEffect(() => {
        carregaRepos()
    }, []) //useEffect executa uma unica vez, quando o componente for montado


    const carregaRepos = async () => {
        const resp = await fetch("https://api.github.com/users/alecarlosjesus/repos")
        const data = await resp.json()
        setnewRepos(data)
    } //chamada async para clicar no botão e caso demore para carregar ele avisa para continuar a aplicação, o restante da aplicação continua normalmente.

    //fetch é uma função interna do javascript que faz requisições para outras páginas e aceita retornos.

    //Sempre que faz requisições para outras páginas, é necessário usar o await para travar a função e o restante da aplicação continua, ela perde o formato na requisição e chegando no retorno, ela fica em formato de objeto por conta da função json().

    return (
        <div>
            <h2>Lista de Repositórios</h2>
            <ul>
                {newRepos.map((repositorio, i) =>
                    <li key={repositorio.id}>{repositorio.name}</li>
                )}
            </ul>
        </div>
    )
    //map é um iterator 
    //iterator é um auto-loop que percorre um array e executa uma função para cada item do array.
}