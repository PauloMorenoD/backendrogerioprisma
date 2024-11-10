import { getAllDonatesService } from "../services/getAllDonates.services.js"

const getAllDonatesController = async (_req, res) => {

    const getAllDonates = await getAllDonatesService()

    return res.status(200).json(getAllDonates)
}

export {
    getAllDonatesController
}