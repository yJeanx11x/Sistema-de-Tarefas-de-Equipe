require('dotenv').config()
const jwt = require('jsonwebtoken')

async function verificarToken(req, res, next) {

    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: "Acesso negado" })
    }
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
    } catch (error) {
        return res.status(401).json({ message: "Token Inválido!" })
    }

}

module.exports = { verificarToken }