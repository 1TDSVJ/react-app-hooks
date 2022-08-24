import React from 'react'
import modaFem from '../img/modaFem.jpg'
import sandalhaSaltoF from '../img/sandalhaSaltoF.jpg'

export default function ModaFeminina() {
  return (
    <main>
        <h1>Para as mulheres...</h1>
        <figure>
            <img src={modaFem} alt="Mulher fazendo compras" />
            <figcaption>Seção feminina de nossa loja</figcaption>
        </figure>
        <h2>Mais Vendido!</h2>
        <figure>
            <img src={sandalhaSaltoF} alt="Sandalha com salto amarelo lima" />
            <figcaption>Nossa sandalha mais vendida</figcaption>
        </figure>
    </main>
  )
}
