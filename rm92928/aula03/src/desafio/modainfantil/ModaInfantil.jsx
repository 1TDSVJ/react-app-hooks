import React from "react"

import img1 from '../../img/modainfantil1.jpg'
import img2 from '../../img/modainfantil2.jpg'

export default function ModaInfantil(){

    const modainf = {
        backgroundColor: 'lightgreen',
        height: '70vh',
        textAlign: 'center',
        color: 'gray'
    }

    return(

        <div>
            <div style={modainf}>
                <h1>Moda Infantil</h1>
                <p>Têm para as crianças também!!!</p>
            </div>

            <figure>
                <img src={img1} alt="três camisetas" width={"150px"} />
                <figcaption>Kit Três camisaetas por apenas R$24,99</figcaption>
            </figure>

            <figure>
                <img src={img2} alt="Roupa infantil feminina" width={"150px"} />
                <figcaption>Camiseta e saia por apenas R$19,99</figcaption>
            </figure>
        </div>
    )
}