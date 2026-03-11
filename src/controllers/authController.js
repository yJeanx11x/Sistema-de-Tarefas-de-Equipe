const db = require('../module/User')
const validacao = require('../schemas/userSchema')

async function criarUser(req, res, next) {
    const z = validacao.safeParse(req.body)
    try {
        await db.create({
            nome: z.data.nome,
            email: z.data.email,
            password: z.data.password
        })
        return res.status(201).json({ message: 'Usuario criado com sucesso' })

    } catch (error) {
        next(error)
    }
}

module.exports = { criarUser }