import { Router } from "express";

import { AnomaliasController } from "../controllers/anomalias.js";

export const anomaliaRouter = Router()

anomaliaRouter.get('/', AnomaliasController.getAll)
anomaliaRouter.get('/:variable', AnomaliasController.getOne)
anomaliaRouter.patch('/:variable', AnomaliasController.update) 