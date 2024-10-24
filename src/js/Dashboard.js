import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación entre rutas
import '../css/Login.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // // Función para cerrar sesión
   const handleLogout = () => {
     console.log('Logged out');
     navigate('/'); // Redirigimos a la página de login
   };

  return (
    <div>
      <h1>Bienvenido a tu perfil</h1>
      
    </div>
  );
};

export default Dashboard;

