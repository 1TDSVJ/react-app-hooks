import React from "react";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import ModaFeminina from "./components/modaFeminina/ModaFeminina";
import ModaInfantil from "./components/modaInfantil/ModaInfantil";
import ModaMasculina from "./components/modaMasculina/ModaMasculina";
import Rodape from "./components/rodape/Rodape";
import Sobre from "./components/sobre/Sobre";

export default function App(){
  return (
      <>
        <Menu/>
        {/*<ModaMasculina/>
        <ModaFeminina/>
        <ModaInfantil/>
        <Home/>*/}
        <Sobre/>
        <Rodape/>
      </>
  )
}