import React from "react"
import casualFem from "../images/casualFem.jpg"
import esporteFem from "../images/esporteFem.jpg"
import galaFem from "../images/galaFem.jpg"

export default function ModaFeminina(){
    const modaFeminina={
        backgroundColor: "#fad9f8",
        height:"200vh",
        textAlign:"center",
        color:"#5f0d69",
        fontSize:"25px"
    }
    
    const imagesCss={
        maxWidth:"20%",
        maxHeight:"20%",
        width:"auto",
        height:"auto",
    }

    return(
        <body style={modaFeminina}>
            <div>
                <h1>Moda Feminina</h1>
                <h3>PARA TODAS AS MULHERES</h3>
            </div>
            <div>
                <h2>Casual</h2>
                <span><img src={casualFem} alt="mulher-casual"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Esportes</h2>
                <span><img src={esporteFem} alt="mulheres-tenis"style={imagesCss}/></span>
            </div>
            <div>
                <h2>Grife</h2>
                <span><img src={galaFem} alt="mulher-gala"style={imagesCss}/></span>
            </div>
        </body>
    )
}