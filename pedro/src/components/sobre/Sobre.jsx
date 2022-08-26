import React from "react"

export default function Sobre(){

    const sobre = {
        backgroundColor: '#FA8072',
        height: '85vh',
        textAlign: 'center',
        color: '#FF0000'
    }

    return(
        <div style={sobre}>
            <h1>Página de Sobre o grupo</h1>
            <p>Coisas sobra os integrantes do grupo.</p>
        </div>
    )
}