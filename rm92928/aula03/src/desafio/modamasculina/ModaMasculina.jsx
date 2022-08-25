import React from "react"

import img from '../../img/modamasculina.jpg'

export default function ModaMasculina(){

    const modamas = {
        backgroundColor: 'lightblue',
        height: '70vh',
        textAlign: 'center',
        color: 'gray'
    }

    return(

        <div>
            <div style={modamas}>
                <h1>Moda Masculina</h1>
                <p>O hype dos homens chegou!</p>
            </div>

            <figure>
                <img src={img} alt="Jaqueta do rock" width={"150px"} />
                <figcaption>Jaqueta Route 66 por apenas R$39,99</figcaption>
            </figure>
        </div>
    
    )
}