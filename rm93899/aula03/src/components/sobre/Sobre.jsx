import React from 'react';
import autor from './.././img/autor.jpg'

export default function Sobre() {
  const sobre = {
    backgroundColor: '#BA55D3',
    height: '105vh',
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
  }

  return (
    <div style={sobre}>
      <h1>Autor</h1>
      <img src={autor} alt="autor" />
      <figcaption>
        <p>Emerson Galdino - RM93899 <a href="https://www.instagram.com/yosoygaldino/" target='blank'>Instagram</a>
        </p>
      </figcaption>
    </div>
  )
}
