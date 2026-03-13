const express = require('express')
const appRoutes = express.Router()
const authController = require('../controllers/authController')
const token=require('../middlewares/tokenDeAutentificacao.js')
// Rota de criar usuário
appRoutes.post('/auth/register', authController.register)
// Roda de Login 
appRoutes.post('/auth/login',authController.login)



module.exports = appRoutes