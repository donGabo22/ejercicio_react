// backend/routes/users.js

var express = require('express');
var router = express.Router();
var User = require('../models/User'); // Importa el modelo User


// Ruta para registrar un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Imprimir los datos recibidos para la depuración
  console.log('Datos recibidos del frontend:', { nombre, correo, contraseña });

  try {
    const nuevoUsuario = new User({
      nombre,
      correo,
      contraseña,
    });

    // Intentar guardar el nuevo usuario en la base de datos
    console.log('Intentando guardar el usuario en la base de datos...');
    await nuevoUsuario.save();
    
    console.log('Usuario guardado con éxito:', nuevoUsuario);
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    // Depurar el error al guardar
    console.error('Error al registrar el usuario:', error);

    if (error.code === 11000) { // Código de error por correo duplicado
      console.log('El correo ya está registrado en la base de datos');
      res.status(400).json({ message: 'El correo ya está registrado' });
    } else {
      console.log('Error desconocido al registrar el usuario');
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  }
});


// backend/routes/users.js

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  console.log('Solicitud GET recibida en /users'); // Mensaje de depuración al recibir la solicitud

  try {
    const usuarios = await User.find(); // Encuentra todos los usuarios en la base de datos
    console.log('Usuarios encontrados:', usuarios); // Muestra los usuarios encontrados en la base de datos

    if (usuarios.length === 0) {
      console.log('No se encontraron usuarios en la base de datos.'); // Mensaje si no hay usuarios
      return res.status(404).json({ message: 'No hay usuarios disponibles' }); // Respuesta 404 si no hay usuarios
    }

    res.status(200).json(usuarios); // Devuelve la lista de usuarios
  } catch (error) {
    console.error('Error al obtener usuarios:', error); // Muestra el error en la consola
    res.status(500).json({ message: 'Error al obtener usuarios' }); // Respuesta en caso de error
  }
});

module.exports = router;
