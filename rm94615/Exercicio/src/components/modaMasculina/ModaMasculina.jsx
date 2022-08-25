import React from "react";
import roupaM from "../img/roupaM.png";

export default function ModaMasculina() {

    const modaMasculina = {
        backgroundColor :"#e6ecff",
        height: "120vh",
        textAlign: "center",
        color: "#ff9933"
        
    }
    return(
        <div style={modaMasculina}>
            <h1>Moda Masculina</h1>
            <p>Em Nossa Loja temos a maior variedade de roupas! Venha encontrar a roupa perfeita para você!</p>
            <figure>
                <img src={roupaM} alt="Uniforme Preto Pain Gaming (Kami)" />
                <figcaption>Novo uniforme São Paulo 2022! Compre já o seu!</figcaption>
            </figure>
        </div>
    )
}