import React from "react";
import roupaF from "../img/roupaF.jpg";

export default function ModaFeminina() {

    const modaFeminina = {
        backgroundColor :"#ccffcc",
        height: "120vh",
        textAlign: "center",
        color: "#ff66ff"
        
    }
    return(
        <>
        <div style={modaFeminina}>
            <h1>Moda Feminina</h1>
            <p>Aqui você mulher encontra a roupa ideal para o seu estilo! Vem ser mais você!</p>
            <figure>
                <img src={roupaF} alt="Roupa Casual Cinza e Preto Loud (Thaiga)"/>
                <figcaption>Conjunto Casual feminina! Compre já o seu!</figcaption>
            </figure>
        </div>
        </>
    )
}