import React from 'react';
import ModaFeminina from "../../../assets/modaFeminina";
// import { Container } from './styles';

function modaFeminina() {
    const modaFeminina = {
        backgroundColor: "purple",
        height: "85vh",
        textAlign: "center",
        color: "black",
      };
    
      return (
        <div style={modaFeminina}>
          <h1>Renner - Moda Feminina</h1>
              <p>Sinta-se linda de uma forma que você nunca viu!</p>
              <img src={ModaFeminina} alt="Moda Feminina" />
        </div>
      );
}

export default modaFeminina;