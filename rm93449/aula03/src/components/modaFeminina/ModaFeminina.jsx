import React from "react"

import feminina from "../img/modafeminina.jpg"

function ModaFeminina() {
  return(
    <div>
        <h1>Moda Feminina:</h1>
        <p>Qualidade é o nosso estilo. Sinta-se sexy em todas as estações. A vida não é perfeita, mas sua roupa é! A vida é muito curta para usar roupas sem graça.</p>
        <img src={feminina} alt="Moda feminina" width={'500px'} />
    </div>
  )
}

export default ModaFeminina;