import React from 'react';
import roupaMasculina from './img/roupaMasculina';

export default function ModaMasculina(){

    const modaMasculina = {
        backgroundColor: '#2314f5',
        height: '85vh',
        textAlign: 'center',
        color: '#fff'
    }

    return(
        <header>
           
           <div style={modaMasculina}>
           <h1> Moda Masculina</h1>
            <span>
                <img src={roupaMasculina} alt="Roupa Masculina" />
                <br />
                <figcaption> Roupa Masculina</figcaption>
            </span>
           </div>
        </header>
        
    )
}