const db = require('../config/database')

const usuario = db.Sequelize.define('usuario', {
    nome: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.sequelize.STRING,
        allowNull: false,
    }

})

usuario.sync({ force: false })

