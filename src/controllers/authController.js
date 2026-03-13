require('dotenv').config()
const { id } = require('zod/locales')
const db = require('../module/User')
const validacao = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// criar um novo usuario 
async function register(req, res, next) {
    const z = validacao.safeParse(req.body)
    try {
        const passwordHash = await bcrypt.hash(z.data.password, 12)
        await db.create({
            nome: z.data.nome,
            email: z.data.email,
            password: passwordHash
        })
        return res.status(201).json({ message: 'Usuario criado com sucesso' })

    } catch (error) {
        next(error)
    }
}

// fazer login do usuario

async function login(req, res, next) {
    const { email, password } = req.body
    const usuario = await db.findOne({ where: { email } })
    if (!usuario) {
        return res.status(404).json({ message: "E-mail não encontrado." })
    }
    const verificarpassword = await bcrypt.compare(password, usuario.password)
    if (!verificarpassword) {
        return res.status(404).json({ message: "Senha incorreta." })
    }
    try {
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: usuario.id,
        }, secret, { expiresIn: '1h' })

        return res.status(200).json({ message: "Sucesso", id: usuario.id, token })
    } catch (error) {
        next()
    }

}



module.exports = { register, login }