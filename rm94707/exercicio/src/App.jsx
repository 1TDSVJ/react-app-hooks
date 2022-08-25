import React from "react";
import Rota from "./componentes/rota/Rota";
import Rodape from "./componentes/rodape/Rodape";
import Menu from "./componentes/menu/Menu";
import Sobre from "./componentes/sobre/Sobre";


export default function App(){

  return (
      <>
        <Menu/>
        <Rota/>
        <Rodape/>
      </>
  )
}