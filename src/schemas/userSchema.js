const z = require('zod')

const autentificacao = z.object({
    nome: z.string().min(3, ' Mínimo 3 caracteres'),
    email: z.email(),
    password: z.string().min(6, ' mínimo 6 caracteres')
})

module.exports = autentificacao