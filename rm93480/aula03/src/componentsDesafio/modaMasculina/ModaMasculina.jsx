import React from "react"
import cria from "../images/cria.png"
import esporteMasc from "../images/esporteMasc.jpg"
import galaMasc from "../images/galaMasc.jpg"
import ronqui from "../images/ronqui.jpg"

export default function ModaMasculina(){
    const modaMasculina={
        backgroundColor: "#b8e1ee",
        height:"200vh",
        textAlign:"center",
        color:"#164070",
        fontSize:"25px"
    }
    
    const imagesCss={
        maxWidth:"23%",
        maxHeight:"23%",
        width:"auto",
        height:"auto",
    }
    const ronquiCss={
        maxWidth:"32.5%",
        maxHeight:"32.5%",
        width:"auto",
        height:"auto",
    }

    return(
        <body style={modaMasculina}>
            <div>
                <h1>Moda Masculina</h1>
                <h3>Tudo que você precisa para conter seu jovem capetinha</h3>
            </div>
            <div>
                <h2>Casual</h2>
                <span><img src={cria} alt="homem-casual"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Esportes</h2>
                <span><img src={esporteMasc} alt="homens-tenis"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Grife</h2>
                <span><img src={galaMasc} alt="homem-gala"style={imagesCss}/><img src={ronqui} alt="ronqui"style={ronquiCss}/></span>
            </div>
        </body>
    )
}