const db = require('../module/User')
const validacao = require('../schemas/userSchema')
const bcrypt = require('bcrypt')

async function criarUser(req, res, next) {
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

module.exports = { criarUser }