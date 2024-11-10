import { prismaClient } from "../database/index.js"

const createDonateService = async (donateData) => {

     await prismaClient.donators.create({
        data: {
            name: donateData.name,
            comment: donateData.comment,
            photo: donateData.photo
        }
     })
     return

}

export { createDonateService }