import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './js/Login';
import Dashboard from './js/Dashboard';
import Usuarios from './js/usuarios/Usuarios';
import NuevoUsuario from './js/usuarios/NuevoUsuario';
import MostrarUsuario from './js/usuarios/MostrarUsuario';
import EliminarUsuario from './js/usuarios/EliminarUsuario';

import Tareas from './js/tareas/Tareas';
import NuevaTarea from './js/tareas/NuevaTarea';
import MostrarTarea from './js/tareas/MostrarTarea';
import EliminarTarea from './js/tareas/EliminarTarea';


import Layout from './js/Layout'; // Importamos el Layout
import './css/Login.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/" element={<Login />} />

          {/* Rutas protegidas (restringidas al usuario logueado) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/NuevoUsuario" element={<NuevoUsuario />} />
            <Route path="/MostrarUsuario" element={<MostrarUsuario />} />
            <Route path="/EliminarUsuario" element={<EliminarUsuario />} />

            <Route path="/NuevaTarea" element={<NuevaTarea />} />
            <Route path="/MostrarTarea" element={<MostrarTarea />} />
            <Route path="/EliminarTarea" element={<EliminarTarea />} />



          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
