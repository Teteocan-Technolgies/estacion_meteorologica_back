import { Router } from "express";
import { TempHumedadController } from "../controllers/temp_humedad.js";

export const temp_humedadRouter = Router();

temp_humedadRouter.get('/', TempHumedadController.getAll)
temp_humedadRouter.post('/range', TempHumedadController.getAllByDate)
temp_humedadRouter.get('/one', TempHumedadController.getOneGroup)