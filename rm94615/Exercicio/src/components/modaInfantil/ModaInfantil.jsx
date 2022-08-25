import React from "react";
import roupaC from "../img/roupaC.jpg";

export default function ModaInfantil() {

    const modaInfantil = {
        backgroundColor :"#ccf5ff",
        height: "120vh",
        textAlign: "center",
        color: "#ff6666"
    }

    return(
        <div style={modaInfantil}>
            <h1>Moda Infantil</h1>
            <p>Temos a maior variedades de roupas para o publico Infantil. A garotada gosta de estar bem vestido.</p>
            <figure>
                <img src={roupaC} alt="Roupa Casual tema Dinossauro"/>
                <figcaption>Conjunto Casual infantil masculino! Compre já o seu!</figcaption>
            </figure>
        </div>
    )
}