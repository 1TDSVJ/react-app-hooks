import React from 'react';
import roupaIF2 from '../img/roupaIF2.jpg'

export default function ModaInfantil(){

    const modaInfantil = {
        backgroundColor: '#21e7e7',
        height: '85vh',
        textAlign: 'center',
        color: '#fff'
    }

    return(
        <header>
        
       <div style={modaInfantil}>
       <h1> Moda Infantil</h1>
        <span>
            <img src={roupaIF2} alt="Roupa Infantil" />
            <figcaption>Roupa Infantil</figcaption>
        </span>
       </div>
    </header>
    )
}