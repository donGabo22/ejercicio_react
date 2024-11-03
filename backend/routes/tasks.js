//backend/routes/tasks.js

const express = require('express');
const router = express.Router();

// Aquí puedes agregar un modelo para las tareas si ya lo tienes
// const Task = require('../models/Task');

// Ruta para crear una nueva tarea
router.post('/', async (req, res) => {
  const { titulo, descripcion, usuario } = req.body;

  // Aquí puedes implementar la lógica para guardar la tarea en la base de datos
  console.log('Nueva tarea:', { titulo, descripcion, usuario });

  // Por ahora, solo respondemos que la tarea fue creada
  res.status(201).json({ message: 'Tarea creada exitosamente' });
});

// Ruta para obtener todas las tareas
router.get('/', async (req, res) => {
  // Aquí puedes implementar la lógica para obtener tareas de la base de datos
  console.log('Obteniendo todas las tareas');

  // Por ahora, solo respondemos con un array vacío
  res.status(200).json([]);
});

module.exports = router;
