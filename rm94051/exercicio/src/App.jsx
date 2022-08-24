import React from "react";
import Menu from "./components/menu/Menu";
import Rodape from "./components/rodape/Rodape";
import Rota from "./components/rota/Rota";
import Sobre from "./components/sobre/Sobre";


export default function App(){

  return (
      <>
        <Menu/>
        <Rota/>
        <Rodape/>
      </>
  )
}