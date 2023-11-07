import React from 'react';
import './FormularioLogin.css'; 

const FormularioLogin = () => {
  return (
    <div className="login-form-container"> {/* Aplica estilos de centrado */}
      <h2>Inicio de Sesión</h2>
      <form>
        <div>
          <label>Nombre de usuario:</label>
          <input className="inputLogin" type="text" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input className="inputLogin" type="password" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FormularioLogin;
