import React from "react"

export default function Home(){

    const home = {
        backgroundColor :"#ADD8E6",
        height: "85vh",
        textAlign: "center",
        color: "#000000"
        
    }

    return(
        <div style={home}>
            <h1>Home</h1>
            <p>Aqui na MultiModas desejamos o melhor para nosso cliente!</p>
        </div>
    )
}
