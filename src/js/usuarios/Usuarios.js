import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación entre rutas

const Usuarios = () => {
    const navigate = useNavigate();

  // Define las funciones que realizarán las acciones
  const handleCreateUser = () => {
    console.log('Crear un nuevo usuario');
    navigate('/NuevoUsuario'); // Redirigimos a la página de login

  };

  const handleShowUsers = () => {
    console.log('Mostrar usuarios existentes');
    navigate('/MostrarUsuario'); // Redirigimos a la página de login

  };

  const handleDeleteUser = () => {
    console.log('Eliminar usuarios');
    navigate('/EliminarUsuario'); // Redirigimos a la página de login

  };

  return (
    <div>
      <h1>Bienvenido</h1>
      <h6>Por favor, selecciona una opción:</h6>

      {/* Asigna las funciones a los botones correctos */}
      <button onClick={handleCreateUser}>Crear Un Nuevo Usuario</button>
      <button onClick={handleShowUsers}>Mostrar Usuarios Existentes</button>
      <button onClick={handleDeleteUser}>Eliminar Usuarios</button>
    </div>
  );
};

export default Usuarios;
