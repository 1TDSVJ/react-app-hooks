import React, {useState} from "react"; // chaves representam que será usado localmente

export default function Repositorios(){
    
    const [repositorios, setRepositorios] = useState();


    return(
        <div>
            <h2>Exemplo de utilização do useState</h2>
            <p>Meu repositório: {repositorios}</p>
            <button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button> 
        </div>
    )
}

//<button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button> 
//Sem a arrow function, fica infinitamente executando o setRepositorios()