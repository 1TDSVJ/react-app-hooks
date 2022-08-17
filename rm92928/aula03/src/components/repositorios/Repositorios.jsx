import React, {useState} from "react"; // chaves representam que será usado localmente

export default function Repositorios(){
    
    const [repositorios, setRepositorios] = useState("1TDSVJ");
    let valorVariavel = "2022"

    const alteraRepo = () =>{
        setRepositorios(repositorios + 1)
        valorVariavel += 5
        console.log(valorVariavel)
    }


    return(
        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositório: {repositorios}</p>
            <p>Minha Variável: {valorVariavel}</p>
            <button onClick={()=>alteraRepo("1TDSVJ")}>Altera Dados</button> 
        </div>
    )
}

//<button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button> 
//Sem a arrow function, fica infinitamente executando o setRepositorios()