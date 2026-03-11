const express=require('express')
const appRoutes=express.Router()
const authController=require('../controllers/authController')
appRoutes.post('/auth/register', authController.criarUser )


module.exports=appRoutes