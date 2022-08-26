import React from 'react';
import ModaMasculina from "../../../assets/unnamed-780x405";
// import { Container } from './styles';

function modaMasculina() {
    const modaMasculina = {
        backgroundColor: "red",
        height: "85vh",
        textAlign: "center",
        color: "white",
      };
    
      return (
        <div style={modaMasculina}>
          <h1>Renner - Moda Masculina</h1>
              <p>Tudo para você se sentir mais masculo</p>
              <img src={ModaMasculina} alt="Moda Masculina" />
        </div>
      );
}

export default modaMasculina;