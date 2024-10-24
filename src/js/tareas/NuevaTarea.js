import React from 'react';
import '../../css/NuevaTarea.css';

const NuevaTarea = () => {
  return (
    <div className="tarea-container">
      <h1 className="titulo">Crear Nueva Tarea</h1>
      <h6 className="subtitulo">Completa el formulario para agregar una tarea</h6>

      <form className="tarea-form">
        {/* Campo de texto para la tarea */}
        <input type="text" placeholder="Descripción de la Tarea" className="input-text" required />
        
        {/* Selector de fecha */}
        <input type="date" className="input-date" required />

        {/* Etiqueta y Combo box */}
        <label htmlFor="opciones" className="label-select">Selecciona un usuario a asignar tarea:</label>
        <select id="opciones" className="input-select" required>
          <option value="">Selecciona una opción</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>

        {/* Botón de creación */}
        <button type="submit" className="btn-crear">Crear Tarea</button>
      </form>
    </div>
  );
};

export default NuevaTarea;
