import React from "react"

export default function ShowRepos(props){

    let estilo

    if(new Date().getHours() < 12){
        estilo = props.objEstilos.manha
        
    } else if(new Date().getHours() > 12 && new Date().getHours() < 18){
        estilo = props.objEstilos.tarde
    } else{
        estilo = props.objEstilos.noite
    }

    return(
        <div>
            <h2 style={estilo}>Lista de repositórios</h2>
            <p>{props.repositorios}</p>

            <button onClick={()=> props.setRepositorios("Alterado no filho!")}>Alterar</button>
            


        </div>
    )
}
