// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/'); // Redirigir al login
  };
  return (
    <AppBar position="static">
      <Toolbar>

        <Button color="inherit" onClick={() => navigate('/Usuarios')}>
          Usuarios
        </Button>
        <Button color="inherit" onClick={() => navigate('/Tareas')}>
          Tareas
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
