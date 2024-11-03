const app = require('./app'); // Importamos la configuración de Express
const PORT = process.env.PORT || 5000; // Usamos el puerto 5000 por defecto

app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:5000');
});
