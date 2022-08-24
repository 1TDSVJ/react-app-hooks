import React from 'react'

export default function Produtos () {

    const produtos = {
        backgroundColor: '#bff',
        height: '85vw',
        textAlign: 'center',
        color: '#7cc'
    }

    return(
        <div style={produtos}>
            <h1>Pagina de produtos</h1>
            <p>Exemplo de produtos do projeto</p>
        </div>
    )
}