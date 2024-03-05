// api/proxy.js
import fetch from 'node-fetch';

export default async (req, res) => {
    // La URL base de la API externa a la que te quieres conectar
    const baseUrl = 'http://api.football-data.org/v4/';

    // Adaptamos la lógica para construir la URL de solicitud
    // Necesitarás ajustar esto para que funcione con la estructura de tu solicitud
    const path = req.url.replace('/api/', ''); // Elimina el prefijo '/api/' de la URL
    const url = `${baseUrl}${path}`;

    // Usar tu API key como antes
    const apiKey = '1a339e6dbc3b4c649cc23a710a7bb7fa';

    try {
        const apiResponse = await fetch(url, {
            headers: { 'X-Auth-Token': apiKey },
        });
        const data = await apiResponse.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la solicitud' });
    }
};
