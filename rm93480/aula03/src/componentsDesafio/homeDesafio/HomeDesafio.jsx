import React from "react"
import { Link } from "react-router-dom"

export default function HomeDesafio(){
    const homeDesafio={
        backgroundColor: "#ebe7db",
        height:"85vh",
        textAlign:"center",
        color:"#242321",
        fontSize:"25px"
    }
    const textRedirect={
        fontSize:"50px",
        listStyle:"none",
        textDecoration:"none"
    }

    return(
        <body style={homeDesafio}>
            <div>
                <h1 >TudoModa</h1>
                <h3>SEU GUARDA-ROUPA, AGORA NA PALMA DA SUA MÃO</h3>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaFeminina'>Moda Feminina</Link></li></ul>
                
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaMasculina'>Moda Masculina</Link></li></ul>

            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaInfantil'>Moda Infantil</Link></li></ul>

                
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='#'>Pets</Link></li></ul>
                <img src="../sobre/images/pets.jpg" alt="crinça-cahorro"/><img src="../sobre/images/pets2.jpeg" alt="cachorro-fantasia"/>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='#'>Fantasias</Link></li></ul>
                <img src="../sobre/images/fantasia.jpg" alt="homem-fantasia"/>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/sobre'>Sobre</Link></li></ul>
            </div>
        </body>
    )
}
    
