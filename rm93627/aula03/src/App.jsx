import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Produtos from "./components/produtos/Produtos";
import Servicos from "./components/servicos/Servicos";

import MenuModa from "./components/moda/MenuModa";
import RodapeModa from "./components/moda/RodapeModa";
import HomeModa from "./pages/moda/home/HomeModa";
import ModaFeminina from "./pages/moda/modaFeminina/ModaFeminina";
import ModaMasculina from "./pages/moda/modaMasculina/ModaMasculina";
import ModaInfantil from "./pages/moda/modaInfantil/ModaInfantil";
import Sobre from "./pages/moda/sobre/Sobre";

export default function App() {
  return (
    <>
      {" "}
      // Fragment - Para não criar uma tag que possa alterar o layout
      {/* <Menu /> */}
      
      // Exercício
      <MenuModa />

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} /> */}
        
        // Exercício
        <Route path="/homeModa" element={<HomeModa />} />
        <Route path="/modafeminina" element={<ModaFeminina />} />
        <Route path="/modamasculina" element={<ModaMasculina />} />
        <Route path="/modainfantil" element={<ModaInfantil />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <RodapeModa />
    </>
  );
}

// const App = () =>{
//     return(
//         <>

//         </>
//     )
// }

// export default App
