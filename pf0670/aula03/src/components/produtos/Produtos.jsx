import React from "react";

export default function produtos(){
    const produtos = {
        backgroundColor: '#bff',
        height: '85vh',
        textAlign: 'center',
        color: '#7cc'
    }
    return(
        <div style={produtos}>
            <h1>Página de Produtos</h1>
            <p>Exemplo de página principal de Produtos do Projeto</p>
        </div>
    )
}