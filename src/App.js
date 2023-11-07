import React from 'react';
import Buscador from './Buscador';
import FormularioLogin from './FormularioLogin';

function App() {
  return (
    <div className="app-container"> {/* Agrega estilos al contenedor principal */}
      <Buscador />
      <FormularioLogin />
    </div>
  );
}

export default App;
