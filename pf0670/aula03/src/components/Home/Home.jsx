import React from 'react'

export default function Home () {

    const home = {
        backgroundColor: '#ffd',
        height: '85vw',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={home}>
            <h1>Pagina principal</h1>
            <p>Exemplo de página principal do projeto</p>
        </div>
    )
}