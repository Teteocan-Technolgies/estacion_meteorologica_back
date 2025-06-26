import { readJSON } from "../../utils/utils.js";

const temp_humedad = readJSON('./data_temp_humedad.json')
let countData = 1;

export class TempHumedadModel{
    static async getAll(){
        return temp_humedad;
    }

    static async getAllByDate( date ){
        const dateStart = new Date(date.from + 'T00:00:00');
        const dateEnd = new Date(date.to + 'T23:59:59');

        const filteredData = temp_humedad.filter(({ Fecha }) => {
            const fecha = new Date(Fecha)
            return fecha >= dateStart && fecha <= dateEnd;
        })
        
        return filteredData
    }

    static async getOneGroup(){
        if(countData === 132) countData = 1;
        const data = temp_humedad.find(data => data.entry_id === countData)
        countData++;
        return data
    }
}