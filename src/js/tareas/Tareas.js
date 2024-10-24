import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación entre rutas


const Tareas = () => {
  const navigate = useNavigate();
  // Define las funciones que realizarán las acciones
  const handleCreateHomework = () => {
    console.log('Crear una nueva Tarea');
    navigate('/NuevaTarea'); // Redirigimos a la página de login

  };

  const handleShowHomework = () => {
    console.log('Mostrar Tareas Existentes');
    navigate('/MostrarTarea'); // Redirigimos a la página de login

  };

  const handleDeleteHomework = () => {
    console.log('Eliminar una Tarea');
    navigate('/EliminarTarea'); // Redirigimos a la página de login

  };

  return (
    <div>
      <h1>Bienvenido</h1>
      <h6>Por favor, selecciona una opción:</h6>

      {/* Asigna las funciones a los botones correctos */}
      <button onClick={handleCreateHomework}>Crear Una Nueva Tarea</button>
      <button onClick={handleShowHomework}>Mostrar Tareas Existentes</button>
      <button onClick={handleDeleteHomework}>Eliminar Tareas</button>
    </div>
  );
};

export default Tareas;
