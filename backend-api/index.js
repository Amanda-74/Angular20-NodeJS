// backend-api/index.js

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); 
const app = express();
const PORT = 3000;
const JWT_SECRET = 'MI_CLAVE_SECRETA_ANGULAR_MASTER'; 

app.use(cors({ origin: 'http://localhost:4200' })); // Permitir acceso desde Angular
app.use(express.json()); 

//Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin@test.com' && password === 'MasterAngular20') {
        
        const payload = { userId: 1, email: email };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ 
            message: 'Autenticación exitosa',
            token: token,
        });
        
    } else {
        return res.status(401).json({ 
            message: 'Credenciales inválidas. Usa admin@test.com/MasterAngular20.' 
        });
    }
});

// Iniciar el Servidor
app.listen(PORT, () => {
    console.log(`\nAPI de Login corriendo en: http://localhost:${PORT}`);
});