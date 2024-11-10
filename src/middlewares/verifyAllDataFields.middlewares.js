const verifyAllDataFields = (req, res, next) =>{
    if(req.body.name === null || req.body.name == undefined) {
        return res.status(401).json({ message: "por favor, escreva um nome"})
    }
    if(req.body.comment === null || req.body.comment == undefined) {
        return res.status(401).json({ message: "por favor, escreva um comentário"})
    }

    next()
}

export {
    verifyAllDataFields
}