import React from "react";

export default function ShowRepons(props){

    let estilo

    if (Date().getHours() < 12){
        estilo = props.objEstilos.manhã
    }else if(new Date().getHours() > 12 && new Date().getHours()< 18){
        estilo = props.objEstilos.tarde
    }else{
        estilo = props.objEstilos.noite
    }
    return(

        

        <div>
            <h2 style={estilo}>Lista de repositorios</h2>
            <p>{props.repositorios}</p>
            <button onClick={()=> props.setRepositorios("ALTERADO NO FILHO!")}>ALTERAR</button>

        </div>
    )
}