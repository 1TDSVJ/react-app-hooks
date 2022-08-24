import React from 'react'

export default function Carros(props) {
  return (
    <div>
        <ul>
            {props.listaCarros.map((carro, i) => <li key={i}>{carro}</li>)}
        </ul>
    </div>
  )
}
