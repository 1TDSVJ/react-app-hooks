import React,{useState} from "react"

export default function Repositorios(){

    const [respositorios,setRepositorios] = useState()



    return(

        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositório: {respositorios}</p>
            <button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button>
        </div>

    )
}