require('dotenv').config()
const sequelize=require('sequelize')


const Sequelize=new sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
host:process.env.HOST,
 dialect:process.env.DB_DIALECT

})
try {
 Sequelize.authenticate()
    console.log('DB conectado com sucesso !')
    
} catch (error) {
    console.log(error)
}
module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize    
}
    
