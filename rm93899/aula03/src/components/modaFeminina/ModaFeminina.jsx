import React from 'react';
import fem from './../img/fem.jpg'

export default function ModaFeminina() {

    const modaFeminina = {
        backgroundColor: '#FF69B4',
        color: 'white',
        height: '60vh',
        textAlign: 'center',
    }
    return (
        <div style={modaFeminina}>
            <h1>Moda Feminina</h1>
            <img src={fem} alt="Mulher Modelo" />
            <p>O mundo da moda conta com uma grande diversidade de conceitos, ideias, gostos, e vive em constante mudança. Por todo seu glamour e estilo, encanta a todos, principalmente as mulheres. A preocupação em se vestir bem e se sentir bonita é algo comum em qualquer lugar do mundo, e começa cada vez mais cedo. Mas uma coisa é certa, não adianta estar na moda, se o que você usa não é o seu estilo, não combina com você e não te deixa à vontade. O importante é se sentir bem!</p>
        </div>
    )
}
