import { prismaClient } from "../database/index.js"

const verifyNameAlreadyExists = async(req, res, next) => {
    const nameExists = await prismaClient.donators.findFirst({
        where:{
            name: req.body.name
        }
    })

    if (nameExists) return res.status(409).json({ message: "este nome já existe"})

    next()
}

export { verifyNameAlreadyExists }