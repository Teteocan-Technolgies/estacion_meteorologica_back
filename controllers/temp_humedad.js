import { TempHumedadModel } from "../models/local-files/temp_humedad.js";

export class TempHumedadController {
    static async getAll(req, res){
        const temp_humedad = await TempHumedadModel.getAll();
        return res.json(temp_humedad);
    }

    static async getAllByDate(req, res){
        const group_temp_humedad = await TempHumedadModel.getAllByDate(req.body)
        if(group_temp_humedad) return res.json(group_temp_humedad);
        return res.status(404).json({ message: 'No se encontraron datos para ese rango de fechas.' });
    }

    static async getOneGroup(req, res){
        const data_temp_humedad = await TempHumedadModel.getOneGroup()
        if(data_temp_humedad) return res.json(data_temp_humedad);
        return res.status(404).json({ message: 'No se encontraron datos para mostrar.' });
    }
}