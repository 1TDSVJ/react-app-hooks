import React from "react"

export default function Home(){

    const home = {
        backgroundColor: '#ffb',
        height: '70vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={home}>
            <h1>Loja-Moda</h1>
            <p>A melhor loja de moda que você pode encontrar!</p>
        </div>
    )
}