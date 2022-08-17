import React from "react"

export default function ShowRepos(props){

    let estilo
        
        if(new Date().getTime() < 12){
            estilo = props.objEstilos.manha
        }else if(new Date().getTime() > 12 && new Date().getTime() < 18){
            estilo = props.objEstilos.tarde
        }else{
            estilo = props.objEstilos.noite
        }
    

    return(
        <div>
            <h2 style={estilo}>Lista de Repositorios</h2>
            
            <p>{props.repositorios}</p>
            <button onClick={()=> props.setRepositorios("ALTERADO NO FILHO!")}>ALTERAR</button>
            

            
        </div>
    )
}