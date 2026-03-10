require('dotenv').config()
const Sequelize=require('sequelize')


const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
host:process.env.HOST,
 dialect:process.env.DB_DIALECT

})
try {
 sequelize.authenticate()
    console.log('DB conectado com sucesso !')
    
} catch (error) {
    console.log(error)
}
module.exports=sequelize