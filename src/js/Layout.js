import React from 'react';
import Navbar from '../js/AppBar'; // Importamos el componente de navegación
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Esto permite renderizar las rutas secundarias */}
    </div>
  );
};

export default Layout;
