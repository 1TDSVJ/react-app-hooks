import React from 'react';
import roupaM from '../img/roupaM.jpg'

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
                <img src={roupaM} alt="Roupa Masculina" />
                <br />
                
                <figcaption> Roupa Masculina</figcaption>
            </span>
           </div>
        </header>
        
    )
}