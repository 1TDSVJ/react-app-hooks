import React, {useState} from 'react'
import ShowRepons from '../showrepons/showrepons'

export default  function Repositorios(){
    const objEstilos ={ 
        noite: {backgroundColor:'#ff0000'},
        tarde: {backgroundColor: '#fff000'},
        manhã: {backgroundColor: '#0000ff'}
    }


    const [repositorios, setRepositorios] = useState("1TDSVJ")
    let valorVariavel = "2022"
    const alterarepon = () =>{
        setRepositorios(repositorios +1)
        valorVariavel  += 5
        console.log(valorVariavel)
    }

    return(
        <div>
            <h2 style={{backgroundColor:'#00f000', color: '#ff0000', textAlign: 'center'}}>Exemplo de ulização do usestate</h2>
            <p style={objEstilos.noite}>meu repositorio: {repositorios}</p>
            <p style={objEstilos.manhã}>Minha Variavel{valorVariavel}</p>

            <button onClick={()=> alterarepon()}>Altera dados</button>

            <ShowRepons 
            repositorios ={repositorios} 
            setRepositorios={setRepositorios}
            objEstilos={objEstilos} />
        </div>
    )
}