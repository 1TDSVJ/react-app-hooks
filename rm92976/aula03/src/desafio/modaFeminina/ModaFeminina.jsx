import react from 'react';

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
                    <img src="" alt="" />
                    <figcaption>Camiseta Feminina</figcaption>
                </span>
            </div>
        </header>
    )
}