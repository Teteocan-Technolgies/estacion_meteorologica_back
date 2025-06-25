import { readJSON } from "../../utils/utils.js"

const anomalias = readJSON('./anomalias.json');

export class AnomaliasModel {
    static async getAll(){
        return anomalias;
    }

    static async getAnomaliaByVariable({ variable }){
        const anomalia = anomalias.find(anomalia => anomalia.variable === variable);
        return anomalia;
    }

    static async update({ variable, input}){
        const anomaliaIndex = anomalias.findIndex(anomalia => anomalia.variable === variable);
        if( anomaliaIndex === -1) return false;

        anomalias[anomaliaIndex] = {
            ...anomalias[anomaliaIndex],
            ...input
        };

        return anomalias[anomaliaIndex];
    }
};