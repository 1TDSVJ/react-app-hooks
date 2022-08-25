import React from "react";
import roupaM from "../img/roupaM.jpg";

export default function ModaMasculina() {

    const modaMasculina = {
        backgroundColor :"#C0C0C0",
        height: "120vh",
        textAlign: "center",
        color: "#ff0000"
        
    }
    return(
        <div style={modaMasculina}>
            <h1>Moda Masculina</h1>
            <p>Temos Diversos conjuntos para você ficar no drip!</p>
            <figure>
                <img src={roupaM} alt="Conjunto estileira" />
                <figcaption>Conjunto no Drip!</figcaption>
            </figure>
        </div>
    )
}