import React, { useState } from "react";

export default function Semaforo() {
  const colors = {
    pare: { backgroundColor: "#ff0000" },
    atencao: { backgroundColor: "#ffe500" },
    siga: { backgroundColor: "#00ff00" },
  };

  const semaforos = {
    pare: <h2 style={colors.pare}>Pare</h2>,
    atencao: <h2 style={colors.atencao}>Atenção</h2>,
    siga: <h2 style={colors.siga}>Siga</h2>,
  };
  const [semaforo, setSemaforo] = useState(semaforos.pare);

  function changeSemaforo(semaforo) {
    if (semaforo === semaforos.pare) {
      setSemaforo(semaforos.siga);
    }
    if (semaforo === semaforos.siga) {
      setSemaforo(semaforos.atencao);
    }
    if (semaforo === semaforos.atencao) {
      setSemaforo(semaforos.pare);
    }
  }

  return (
    <div>
      {semaforo}
      <button id="change" onClick={() => changeSemaforo(semaforo)}>Trocar</button>
    </div>
  );
}
