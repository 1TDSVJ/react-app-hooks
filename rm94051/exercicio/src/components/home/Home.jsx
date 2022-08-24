import React from "react"

export default function Home(){

    const home = {
        backgroundColor :"#b3b3b3",
        height: "85vh",
        textAlign: "center",
        color: "#b33c00"
        
    }

    return(
        <div style={home}>
            <h1>Home</h1>
            <p>Aqui na OP roupas desejamos o melhor para nosso cliente!</p>
        </div>
    )
}