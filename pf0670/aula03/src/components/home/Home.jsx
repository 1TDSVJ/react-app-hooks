import React from "react";

export default function Home(){
    const home = {

        backgroundColor: '#f5f5',
        height: '20vh',
        textAlign: 'center',
        color:'white'
    }
    return(
        <div style={home}>
            <h1>Bem vindo a Loja Moda</h1>
            <p>A maior loja de artigos de moda do Brasil</p>
        </div>  
    
    )
}   