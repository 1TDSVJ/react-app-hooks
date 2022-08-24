import React from 'react'
import modaMasc from '../img/modaMasc.jpg'
import jaquetas from '../img/modaFem.jpg'

export default function ModaMasculina() {
  return (
    <main>
        <h1>Para os Homens...</h1>
        <figure>
            <img src={modaMasc} alt="Homen fazendo compras" />
            <figcaption>Seção masculina de nossa loja</figcaption>
        </figure>
        <h2>Mais Vendido!</h2>
        <figure>
            <img src={jaquetas} alt="Cabideiro de jaquetas" />
            <figcaption>Seção de jaquetas</figcaption>
        </figure>
    </main>
  )
}
