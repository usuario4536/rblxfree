const express = require('express');
const cors = require('cors'); 

const app = express();
app.use(cors()); // Permite que el frontend se comunique con el backend
app.use(express.json()); // Para leer JSON en las solicitudes

// Ruta para recibir credenciales
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    res.json({ message: "Credenciales recibidas" });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
