import React,{useState} from "react"


export default function Repositorios(){
    
    const [repositorios, setRepositorios] = useState("1TDSVJ")
    let valorVariavel = "2022"

    const alteraRepo = () => {
        setRepositorios(repositorios + 1)
        valorVariavel += 5
        console.log(valorVariavel)
    }

    return(
        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositório: {repositorios}</p>
            <p>Minha Variável: {valorVariavel}</p>
            <button onClick={()=> alteraRepo()}>Add-Repo</button>
        </div>
    )
}