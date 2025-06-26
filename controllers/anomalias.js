import { AnomaliasModel } from '../models/local-files/anomalias.js';
import { validateAnomalia, validatePartialAnommalia } from '../schemas/anomalias.js';

export class AnomaliasController {
    static async getAll(req, res){
        const anomalias = await AnomaliasModel.getAll();

        return res.json(anomalias);
    }

    static async getOne(req, res){
        const { variable } = req.params;
        const anomalia = await AnomaliasModel.getAnomaliaByVariable({variable});
        if(anomalia) return res.json(anomalia);
        return res.status(404).json({ error: 'Anomalia no encontrada' });
    }

    static async update(req, res) {
        const result = validatePartialAnommalia(req.body);

        if(!result.success) return res.status(400).json( { error: JSON.parse(result.error.message) });

        const { variable } = req.params

        const updatedAnomalia = await AnomaliasModel.update({variable, input: result.data})

        return res.json(updatedAnomalia);
    }
}