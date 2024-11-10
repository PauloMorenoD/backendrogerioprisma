import { prismaClient } from "../database/index.js"

export const getAllDonatesService = async () => {
   
   return await prismaClient.donators.findMany()

}

