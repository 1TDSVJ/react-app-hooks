import React from "react";
import{Link} from "react-router-dom";


export default function Menuloja(){

    

    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/modaFeminina'> Moda Feminina</Link></li>
                    <li><Link to='/modaMasculina'> Moda Masculina</Link></li>
                    <li><Link to='/modaInfantil'> Moda Infantil</Link></li>
                    <li><Link to='/sobre'> Sobre a empresa</Link></li>
                   
                </ul>
            </nav>
        </header>
        
    )
    
}