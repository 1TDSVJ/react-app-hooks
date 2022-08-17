import React,{useState} from "react"
import ShowRepos from "../showRepos/ShowRepos"


export default function Repositorios(){

    const objEstilos = {
        manha:{backgroundColor:"#00aeff"},  
        tarde:{backgroundColor:"#ffae00"},
        noite:{backgroundColor:"#8c00ff"}
    }

    const [repositorios,setRepositorios] = useState("1TDSVJ")
    let valorVariavel = "2022"

    const alteraRepo=()=>{
        setRepositorios(repositorios + 1)
        valorVariavel+=5
        console.log(valorVariavel)
    }


    return(

        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p style={objEstilos.noite}>Meu repositório: {repositorios}</p>
            <p style={objEstilos.tarde}>Minha variável: {valorVariavel}</p>

            <button onClick={()=>alteraRepo()}>Add-Repo</button>

            <ShowRepos
                repositorios={repositorios} 
                setRepositorios={setRepositorios}
                objEstilos={objEstilos}
                />
            

        </div>

    )
}