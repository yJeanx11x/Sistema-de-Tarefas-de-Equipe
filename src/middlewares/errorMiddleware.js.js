function errorMiddleware(erro,req,res,next){
    return res.status(500).json({message:erro.message})
}

module.exports=errorMiddleware