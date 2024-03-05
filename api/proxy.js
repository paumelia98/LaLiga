import fetch from 'node-fetch';

export default async (req, res) => {
    // La URL base y demás configuración...
    const baseUrl = 'http://api.football-data.org/v4/';
    const path = req.url.replace('/api/', ''); // Ajusta según la estructura de tu solicitud
    const url = `${baseUrl}${path}`;

    const apiKey = '1a339e6dbc3b4c649cc23a710a7bb7fa';

    try {
        const apiResponse = await fetch(url, {
            headers: { 'X-Auth-Token': apiKey },
        });
        const data = await apiResponse.json();
        // Asegurándote de incluir los headers de CORS en la respuesta
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la solicitud' });
    }
};
