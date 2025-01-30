const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Middleware para parsear JSON en solicitudes POST
app.use(express.json());

// Ruta para manejar el inicio de sesión
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Faltan datos" });
    }

    console.log(`Intento de inicio de sesión -> Usuario: ${username}, Contraseña: ${password}`);

    // En un entorno real, aquí iría la validación de credenciales en una base de datos

    return res.json({ message: "Inicio de sesión recibido" });
});

// Iniciar el servidor y hacerlo accesible desde cualquier dispositivo en la red
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
