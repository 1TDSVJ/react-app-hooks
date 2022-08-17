import React, {useState} from 'react'

export default  function Repositorios(){
    const [repositorios, setRepositorios] = useState()
    return(
        <div>
            <h2>Exemplo de ulização do usestate</h2>
            <p>meu repositorio: {repositorios}</p>
            <button onClick={()=> setRepositorios("1TDSVJ")}>add-repo</button>
        </div>
    )
}