// backend/routes/index.js

// backend/routes/index.js
var express = require('express');
var router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('Bienvenido a la API'); // O puedes enviar un HTML o un JSON
});
//
module.exports = router;
