import React from 'react'
import home2 from './.././img/home2.jpg'
export default function Home() {
    const home = {

        backgroundColor: '#FFFAFA',
        color: 'white',
        height: '75vh',
        textAlign: 'center',
        color: 'slategray',
    }
    return (
        <div style={home}>
            <h1>Bem vindo a Stylist Premium</h1>
            <figcaption>
                <img src={home2} alt="página inicial" />
                <p>A maior loja de artigos de moda do Brasil</p>
            </figcaption>
        </div>
    )
}   