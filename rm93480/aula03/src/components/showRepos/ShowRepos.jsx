import React, { useEffect, useState } from "react";

export default function ShowRepos(props){

    const [newRepos, setnewRepos] = useState([]);

    useEffect(() => {
        carregaRepos()
    }, [])

    // Funções normais são síncronas (call back), esperam o retorno, ou seja, enquanto a função não tiver resposta (demorar demais) o programa não carrega
    // a função é assíncrona para que a aplicação continue rodando enquanto a função não termina
    const carregaRepos = async () => {
        // await para evitar o timeout
        const resp = await fetch("https://api.github.com/users/DiogoKahn/repos");
        const data = await resp.json() // a resposta vem como string, portanto .json() remonta os dados
        setnewRepos(data)
    }
    
    // useEffeect executa o que estiver dentro dele quando o componente for renderizado
    // useEffect(()=>{
    //     console.log("RENDERIZOU O COMPONENTE!")
    // },[])

    // como dependencias foram passadas, o useEffect só será executado quando o objeto for renderizado
    // useEffect(()=>{
    //     console.log("RENDERIZOU O REPOSITORIO!")
    // },[props.repositorios])
    
    return(
        <div>
            <h2>Lista de Repositórios</h2>
            <ul>
               {newRepos.map((repositorio) =>
                <li key={repositorio.id}>{repositorio.name}</li>
               )}
            </ul>
        </div>
    )
}