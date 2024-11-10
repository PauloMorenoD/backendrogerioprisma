import { Router } from "express";
import { createDonateController } from "../controllers/createDonate.controller.js";
import { getAllDonatesController } from "../controllers/getAllDonates.controller.js";
import { verifyNameAlreadyExists } from "../middlewares/verifyDonateNameExists.middlewares.js";
import { verifyAllDataFields } from "../middlewares/verifyAllDataFields.middlewares.js";

const donatesRoutes = Router();

donatesRoutes.post('/',verifyAllDataFields, verifyNameAlreadyExists, createDonateController);
donatesRoutes.get('/', getAllDonatesController);

export default donatesRoutes