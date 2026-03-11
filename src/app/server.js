require('dotenv').config();
const express = require('express');
const app = express();
const rota = require('../routes/routes')
const errorGlobal=require('../middlewares/errorMiddleware.js')
app.use(express.json())
app.use(errorGlobal)
app.use(rota)


app.listen(process.env.PORT, () => console.log('Servidor rodando!'))



