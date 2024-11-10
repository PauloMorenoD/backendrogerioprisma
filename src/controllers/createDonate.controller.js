import  {createDonateService } from "../services/createDonate.service.js"

const createDonateController = async (req, res) => {
    await createDonateService(req.body)
    
    return res.status(201).json({message: "donate feito com sucesso!"}) 
}

export {
    createDonateController
}