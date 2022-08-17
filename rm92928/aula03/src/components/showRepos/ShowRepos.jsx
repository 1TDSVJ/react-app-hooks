import React, { useEffect } from "react";

export default function ShowRepos(props){

    // a função é assíncrona para que ela continue carregando enquanto o resto da página carrega
    useEffect(async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json() // a resposta vem como string, portanto .json() remonta os dados
        props.setRepositorios(data)
    },[])
    
    // useEffeect executa o que estiver dentro dele quando o componente for renderizado
    // useEffect(()=>{
    //     console.log("RENDERIZOU O COMPONENTE!")
    // },[])

    // como dependencias foram passadas, o useEffect só será executado quando o objeto for renderizado
    useEffect(()=>{
        console.log("RENDERIZOU O REPOSITORIO!")
    },[props.repositorios])
    
    return(
        <div>

            <h2>Lista de Repositórios</h2>
            <p>{props.repositorios}</p>
            <button onClick={()=> props.setRepositorios("ALTERADO DO FILHO")}>ALTERAR</button>


        </div>
    )
}