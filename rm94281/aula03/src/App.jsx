import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLoja from './ex-loja-moda/menu-loja/MenuLoja';
import HomeLoja from './ex-loja-moda/home-loja/HomeLoja';

export default function App() {
  return (
    <>
      <MenuLoja />
      <Routes>
        <Route path={<HomeLoja />} />
      </Routes>
    </>
  );
}
