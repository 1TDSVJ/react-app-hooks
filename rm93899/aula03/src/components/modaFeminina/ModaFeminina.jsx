import React from 'react'

export default function Produtos(){
    const produtos = {
        backgroundColor: '#bff',
        height: '85vh',
        textAlign: 'center',
        color: '#7cc'
    } 

    return(
        <div style={produtos}>
            <h1>Páginas de Produtos</h1>
            <p>Exemplo de página principal dos produtos de compra.</p>
        </div>
    )
}