import React, { useState } from 'react';

export default function Semaforo() {
  const [semaforo, setSemaforo] = useState('PARE');

  const obj = {
    PARE: { backgroundColor: 'red' },
    ATENCAO: { backgroundColor: 'yellow' },
    SIGA: { backgroundColor: 'green' },
  };

  function trocaSem() {
    if (semaforo === 'PARE') {
      setSemaforo('SIGA');
    } else if (semaforo === 'ATENÇÃO') {
      setSemaforo('PARE');
    } else if (semaforo === 'SIGA') {
      setSemaforo('ATENÇÃO');
    }
  }
  
  return (
    <div>
      <h2 style={obj.PARE}>PARE</h2>
      <h2 style={obj.ATENCAO}>ATENÇÃO</h2>
      <h2 style={obj.SIGA}>SIGA</h2>
      <button id='btn' onClick={(() => trocaSem())}>
        Alterar
      </button>
      <div id='result'>{semaforo}</div>
    </div>
  );
}
