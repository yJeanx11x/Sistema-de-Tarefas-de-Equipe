require('dotenv').config();
const express = require('express');
const app = express();
const rota = require('../routes/routes')
app.use(express.json())
app.use(rota)


app.listen(process.env.PORT, () => console.log('Servidor rodando!'))



