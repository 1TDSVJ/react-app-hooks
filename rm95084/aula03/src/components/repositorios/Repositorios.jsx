import React, {useState} from 'react'

const Repositorios = () => {
    const [repositorios, setReposiorios] = useState()
  return (
    <div>
        <h2>Exemplo de utilização de useState</h2>
        <p>Meu repositório : {repositorios}</p>
        <button onClick={() => setReposiorios("1TDSVJ")}>Add-Repo</button>
    </div>
  )
}

export default Repositorios