import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){

    const menu = {
        // width: '100%',
        fontWeight: 'bold',
    }

    return(

        <header style={menu}>
            <nav>
                <ul style={{listStyle: 'none'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/modafeminina">Moda Feminina</Link></li>
                    <li><Link to="/modamasculina">Moda Masculina</Link></li>
                    <li><Link to="/modainfantil">Moda Infantil</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>

    )
}