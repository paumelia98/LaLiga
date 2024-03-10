// Importaciones necesarias
import express from 'express';
import fetch from 'node-fetch'; // Asegúrate de instalar node-fetch si no lo has hecho

const app = express();
const PORT = 3000;

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta que actúa como proxy para cualquier ruta bajo /api/
app.get('/api/*', (req, res) => {
  const baseUrl = 'http://api.football-data.org/v4/';
  const path = req.params[0];
  const queryParams = req.url.split('?')[1]; 
  const url = `${baseUrl}${path}${queryParams ? `?${queryParams}` : ''}`; 
  const apiKey = '1a339e6dbc3b4c649cc23a710a7bb7fa';

  fetch(url, {
    headers: {
      'X-Auth-Token': apiKey,
    },
  })
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({ error: 'Error al realizar la solicitud' }));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
