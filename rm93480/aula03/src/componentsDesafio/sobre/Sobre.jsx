import React from "react"
import familiaFeliz from "../images/familiaFeliz.jpg"

export default function Sobre(){
    const sobre={
        backgroundColor: "#ffb",
        height:"70vh",
        textAlign:"center",
        color:"#828d1d",
        fontSize:"30px"
    }
    const imagesCss={
        maxWidth:"40%",
        maxHeight:"40%",
        width:"auto",
        height:"auto",
    }

    return(
        <body style={sobre}>
            <div>
                <h1>Quem somos?</h1>
                <h3>A TudoModa é o novo e moderno braço da já mundialmente conhecida Zefratis</h3>
                <p>Aqui você encontra todas as mais diversas opções de vestúario da maneira mais simples e moderna que a tecnologia pode oferecer</p>
                <span>
                    <img src={familiaFeliz}alt="familia-feliz" style={imagesCss}/>
                </span>
            </div>
        </body>
    )
}