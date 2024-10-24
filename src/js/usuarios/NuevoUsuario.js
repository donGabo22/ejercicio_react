import React from 'react';
import '../../css/NuevoUsuario.css';

const NuevoUsuario = () => {
  return (
    <div className="nuevo-usuario-container">
      <h1>Bienvenido</h1>
      <h6>Crear nuevo usuario para la gestión de tareas</h6>

      <form className="nuevo-usuario-form">
        {/* Campos del formulario */}
        <input type="text" placeholder="Nombre" className="input-field" required />
        <input type="email" placeholder="Correo Electrónico" className="input-field" required />
        <input type="text" placeholder="Telefono" className="input-field" required />
        <button type="submit" className="submit-btn">Crear Usuario</button>
      </form>
    </div>
  );
};

export default NuevoUsuario;

