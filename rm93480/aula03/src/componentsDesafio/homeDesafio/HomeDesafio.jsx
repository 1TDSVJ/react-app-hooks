import React from "react"
import { Link } from "react-router-dom"
import pets from "../images/pets.jpg"
import pets2 from "../images/pets2.jpeg"
import fantasia from "../images/fantasia.jpg"
import criancasHome from "../images/criancasHome.jpg"
import cria from "../images/cria.png"
import casualFem from "../images/casualFem.jpg"

export default function HomeDesafio(){
    const homeDesafio={
        backgroundColor: "#ebe7db",
        height:"350vh",
        textAlign:"center",
        color:"#242321",
        fontSize:"25px"
    }
    const textRedirect={
        fontSize:"50px",
        listStyle:"none",
        
    }
    const imagesCss={
        maxWidth:"20%",
        maxHeight:"20%",
        width:"auto",
        height:"auto",
    }

    return(
        <body style={homeDesafio}>
            <div>
                <h1>TudoModa</h1>
                <h3>SEU GUARDA-ROUPA, AGORA NA PALMA DA SUA MÃO</h3>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaFeminina'>Moda Feminina</Link></li></ul>
                <span>
                    <img src={casualFem}alt="mulher-casual" style={imagesCss}/>
                </span>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaMasculina'>Moda Masculina</Link></li></ul>
                <span>
                    <img src={cria}alt="homem-casual" style={imagesCss}/>
                </span>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/modaInfantil'>Moda Infantil</Link></li></ul>
                <span>
                    <img src={criancasHome}alt="criancas-pijama" style={imagesCss}/>
                </span>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='#'>Pets</Link></li></ul>
                <span>
                    <img src={pets} alt="crinça-cahorro" style={imagesCss}/><img src={pets2} alt="cachorro-fantasia" style={imagesCss}/>
                </span>
                
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='#'>Fantasias</Link></li></ul>
                <span>
                    <img src={fantasia}alt="homem-fantasia" style={imagesCss}/>
                </span>
                
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='/sobre'>Sobre</Link></li></ul>
            </div>
        </body>
    )
}
    
