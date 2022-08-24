import React from 'react';
import MenuLoja from './ex-loja-moda/menu-loja/MenuLoja';
import Rotas from './ex-loja-moda/rotas/Rotas';
import Rodape from './ex-loja-moda/rodape/Rodape';
export default function App() {
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <MenuLoja />
      <Rotas />
      <Rodape />
    </div>
  );
}
