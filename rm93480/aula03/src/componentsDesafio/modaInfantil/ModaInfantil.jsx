import React from "react"
import criancaPraia from "../images/criancaPraia.jpg"
import criancasHome from "../images/criancasHome.jpg"
import crianca from "../images/crianca.jpg"

export default function ModaInfantil(){
    const modaInfantil={
        backgroundColor: "#b8e9c3",
        height:"200vh",
        textAlign:"center",
        color:"#0b7038",
        fontSize:"25px"
    }
    const imagesCss={
        maxWidth:"23%",
        maxHeight:"23%",
        width:"auto",
        height:"auto",
    }

    return(
        <body style={modaInfantil}>
            <div>
                <h1>Moda Infantil</h1>
                <h3>TUDO QUE VOCÊ PRECISA PARA CONTER SEU JOVEM CAPETINHA</h3>
            </div>
            <div>
                <h2>Pijamas</h2>
                <span><img src={criancasHome} alt="criancas-pijama"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Esportes</h2>
                <span><img src={crianca} alt="crianca-pote"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Praia</h2>
                <span><img src={criancaPraia} alt="crianca-praia"style={imagesCss}/></span>
            </div>
        </body>
        
    )
}