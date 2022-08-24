import React from "react";

export default function home(){
    const home = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }
    return(
        <div style={home}>
            <h1>Página Principal</h1>
            <p>Exemplo de página principal do projeto</p>
        </div>
    )
}