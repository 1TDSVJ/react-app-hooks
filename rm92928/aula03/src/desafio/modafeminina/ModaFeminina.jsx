import React from "react"
import img from '../../img/modafeminina.jpg'

export default function ModaFeminina(){

    const modafem = {
        backgroundColor: 'lightpink',
        height: '70vh',
        textAlign: 'center',
        color: 'gray'
    }

    return(

        <div>
            <div style={modafem}>
                <h1>Moda Feminia</h1>
                <p>Os vestidos do momento!</p>
            </div>

            <figure>
                <img src={img} alt="Vestidos" width={"150px"} />
                <figcaption>Vestidos por apenas R$59,99</figcaption>
            </figure>
        </div>

    )
}