import React, {useState} from "react"; // chaves representam que será usado localmente
import ShowRepos from "../showRepos/ShowRepos";

export default function Repositorios(){

    const objEstilos = {
        noite: {backgroundColor: "#ff0000"},
        tarde: {backgroundColor: '#fff000'},
        manha: {backgroundColor: '#0000ff'},
    }
    
    const [repositorios, setRepositorios] = useState("1TDSVJ");
    let valorVariavel = "2022"

    const alteraRepo = () =>{
        setRepositorios(repositorios + 1)
        valorVariavel += 5
        console.log(valorVariavel)
    }

    return(
        <div>
            <h2 style={{backgroundColor:'#00ff00', color: '#ff0000', textAlign: 'center'}}>Exemplo de utilização do useState</h2>
            <p style={objEstilos.noite}>Meu repositório: {repositorios}</p>
            <p style={objEstilos.manha}>Minha Variável: {valorVariavel}</p>
            
            <button onClick={()=>alteraRepo("1TDSVJ")}>Altera Dados</button> 
        
            <ShowRepos 
            repositorios={repositorios}
            setRepositorios={setRepositorios}
            objEstilos={objEstilos} 
            />
            

        </div>
    )
}

//<button onClick={()=>setRepositorios("1TDSVJ")}>Add-Repo</button> 
//Sem a arrow function, fica infinitamente executando o setRepositorios()