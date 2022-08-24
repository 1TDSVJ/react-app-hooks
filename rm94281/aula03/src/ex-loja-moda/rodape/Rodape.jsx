import React from 'react';

export default function Rodape() {
  const footerStyles = {
    textAlign: 'center',
    backgroundColor: 'purple',
    width: '100%',
    fontFamily: 'Monospace'
  }
  return (
    <footer style={footerStyles}>
      <h2>Conheça nossa loja física!</h2>
      <p style={{fontSize: '1rem'}}>Av. Paulista, 1313</p>
      <h2>Entre em contato:</h2>
      <p>tel: (11)99999-9999</p>
      <p>email: xxxx@gmail.com</p>
      <p>Desenvolvido por: Rafael Ramos Costa - RM: 94281</p>
      <p>Todos os direitos reservados, Loja Moda 2022&copy;</p>
    </footer>
  );
}
