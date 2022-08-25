import React from "react";
import roupaF from "../img/roupaF.jpg";

export default function ModaFeminina() {

    const modaFeminina = {
        backgroundColor :"#EE82EE",
        height: "120vh",
        textAlign: "center",
        color: "#9400D3"
        
    }
    return(
        <>
        <div style={modaFeminina}>
            <h1>Moda Feminina</h1>
            <p>Temos muitos conjuntos maravilhosos para as mulheres para deixalas ainda mais lindas!</p>
            <figure>
                <img src={roupaF} alt="Roupa Casual conjunto laranja"/>
                <figcaption>Conjunto Casual</figcaption>
            </figure>
        </div>
        </>
    )
}