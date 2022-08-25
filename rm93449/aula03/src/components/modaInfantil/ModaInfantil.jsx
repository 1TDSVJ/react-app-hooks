import React from "react"

import infantil from "../img/modainfantil.jpg"

function ModaInfantil() {
  return(
    <div>
        <h1>Moda Infantil:</h1>
        <p>Quando falamos de moda infantil logo pensamos nas roupinhas tradicionais onde o rosa é destinado as meninas e o azul aos meninos. Algumas peças também acabam sendo predestinadas a algum sexo ou até mesmo alguns acham que preto não é cor para criança.</p>
        <img src={infantil} alt="Moda feminina" width={'500px'} />
    </div>
  )
}

export default ModaInfantil;