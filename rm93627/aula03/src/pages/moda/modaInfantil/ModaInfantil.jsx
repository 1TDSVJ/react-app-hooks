import React from 'react';
import ModaInfantil from "../../../assets/modainfantil";
// import { Container } from './styles';

function modaInfantil() {
    const modaInfantil = {
        backgroundColor: "pink",
        height: "85vh",
        textAlign: "center",
        color: "black",
      };
    
      return (
        <div style={modaInfantil}>
          <h1>Renner - Moda Infantil</h1>
              <p>Faça seu filho mais especial do que ele já é</p>
              <img src={ModaInfantil} alt="Moda Infantil" />
        </div>
      );
}

export default modaInfantil;