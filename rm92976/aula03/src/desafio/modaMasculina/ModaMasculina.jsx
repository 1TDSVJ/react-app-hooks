import React from 'react';

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
                <img src="" alt="" />
                <figcaption> Camiseta Masculina</figcaption>
            </span>
           </div>
        </header>
        
    )
}