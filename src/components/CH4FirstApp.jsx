import React, { useState } from 'react';

function CH4FirstApp() {
  //Definir el estado inicial del contador utilizando el hook useState
  const [counter, setCounter] = useState(0);

  //Implementar la función handleSubstract para restar del contador
  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  //Implementar la función handleReset para restablecer el contador al valor predeterminado
  const handleReset = () => {
    setCounter(0); // Puedes establecer cualquier valor predeterminado que desees aquí
  };

  return (
    <div>
      <h1>Contador: {counter}</h1>
      {/*Mostrar los botones y vincularlos a las funciones correspondientes */}
      <button onClick={handleSubstract}>Restar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default CH4FirstApp;