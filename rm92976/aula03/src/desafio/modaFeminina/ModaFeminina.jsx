import react from 'react';
import roupaF2 from '../img/roupaF2.jpg'

export default function ModaFeminina(){

    const modaFeminina = {
        backgroundColor: '#e536eb',
        height: '85vh',
        textAlign: 'center',
        color: '#fff'
    }

    return(
        <header>
            
            <div style={modaFeminina}>
            <h1>Moda Feminina</h1>
                <span>
                    <img src={roupaF2} alt="Roupa Feminina" />
                    <figcaption>Roupa Feminina</figcaption>
                </span>
            </div>
        </header>
    )
}