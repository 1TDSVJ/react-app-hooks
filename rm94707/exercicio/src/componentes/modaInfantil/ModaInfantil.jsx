import React from "react";
import roupaC from "../img/roupaI.jpg";

export default function ModaInfantil() {

    const modaInfantil = {
        backgroundColor :"	#87CEEB",
        height: "200vh",
        textAlign: "center",
        color: "#0000CD"
    }

    return(
        <div style={modaInfantil}>
            <h1>Moda Infantil</h1>
            <p>Temos a melhor variedade de roupas infantis aqui em nossa loja, venha deixar seu filho no estilo!</p>
            <figure>
                <img src={roupaC} alt="Roupa Estilosa infantil"/>
                <figcaption>Conjunto Casual no Estilo!</figcaption>
            </figure>
        </div>
    )
}