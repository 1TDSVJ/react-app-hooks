import React from "react"

import masculina from "../img/modamasculina.jpg"

function ModaMasculina() {
  return(
    <div>
        <h1>Moda Masculina:</h1>
        <p>É um estilo definido como elegante e formal que permite simplicidade e, além de tudo, conforto. Calças jeans, camisetas estampadas, tênis e camisas sociais são alguns tipos que nãoo podem faltar no look.</p>
        <img src={masculina} alt="Moda masculina" width={'500px'} />
    </div>
  )
}

export default ModaMasculina;