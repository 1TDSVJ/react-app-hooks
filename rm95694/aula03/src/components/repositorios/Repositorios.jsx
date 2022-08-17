import React, {useState} from 'react';
import ShowRepos from '../ShowRepos/ShowRepos';

// import { Container } from './styles';

function Repositorios() {
  
  const objEstilos = {
    noite:{backgroundColor:'red'},
    tarde:{backgroundColor:'orange'},
    manha:{backgroundColor:'blue'}
  }  

  const [repositorios, setRepositorios] = useState("1TDSVJ")
  let valorVariavel = "2022"

  const alteraRepo = () =>{
    setRepositorios(repositorios + 1)
    valorVariavel += 5
    console.log(valorVariavel)
  }

    return(
        <div>
        <h2 style={{backgroundColor:'#00FF00', color:'#FF0000', textAlign:'center'}}>Exemplo de utilização do useState</h2>
        <p style={objEstilos.noite}>Meu repositório : {repositorios}</p>
        <p style={objEstilos.manha}>Minha Variavel: {valorVariavel}</p>
        
        <button onClick={()=> alteraRepo()}>Altera dados</button>

        <ShowRepos 
        repositorios={repositorios} 
        setRepositorios={setRepositorios}
        objEstilos={objEstilos} />
        </div>
    )
}

export default Repositorios;