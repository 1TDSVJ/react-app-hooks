import React from "react"

export default function ModaMasculina(){

    const modamasculina = {
        backgroundColor: '#bff',
        height: '85vh',
        textAlign: 'center',
        color: '#7cc'
    }

    return(
        <div style={modamasculina}>
            <h1>Página de Moda Masculina</h1>
            <p>Coisas sobra moda masculina.</p>
        </div>
    )
}