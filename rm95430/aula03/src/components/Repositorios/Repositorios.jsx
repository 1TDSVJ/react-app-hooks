import React, {useState} from "react"

export default function Repositorios(){

    const [repositorios, setRepositorios] = useState("1TDSVJ")
    let valorVariavel = "2022"

    const alteraRepo = () =>{
        setRepositorios(repositorios + 1)
        valorVariavel += 5
        console.log(valorVariavel)
    }

    return(

        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositorio : {repositorios}</p>
            <p>Minha Variavel : {valorVariavel}</p>
            <button onClick={()=>alteraRepo("1TDSVJ")}>Altera Dados</button>
        </div>
    )

}