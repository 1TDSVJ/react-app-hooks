import React from 'react';

export default function Rodape() {
  const footer = {
    backgroundColor: '#f2f3',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '1rem'
  }
  const divParagraphs = {
    display: 'flex',
    columnGap: '2rem',
    justifyContent: 'center'
  }
  const margin0 = {
    margin: '0',
  }
  return (
    <footer style={footer}>
      <h2 style={margin0}>Fale Conosco</h2>
      <div style={divParagraphs}>
      <p>Endereço: Avenida Paulista, 1823</p>
      <p>Telefone: (11) 99999-9999</p>
      </div>
      <p style={margin0}>Desenvolvido por: Leonardo Ramos Costa || RM: 94286</p>
      <p>Todos os direitos reservados, Loja Moda 2022 &copy;</p>
    </footer>
  );
}
