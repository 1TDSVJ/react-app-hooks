import React from 'react'
import masculina from './.././img/masculina.jpg'

export default function ModaMasculina() {
    const modaMasculina = {
        backgroundColor: '#4682B4',
        height: '70vh',
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
    }

    return (
        <div style={modaMasculina}>
            <h1>Moda Masculina</h1>
            <img src={masculina} alt="Homem Modelo" />
            <figcaption>
                <p>Roupas para homens! Modelos incríveis feitos para os mais diferentes estilos! Surpreenda a todos com a Stylist Premium!
                </p>
            </figcaption>
        </div>
    )
}
