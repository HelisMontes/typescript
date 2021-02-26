import { atributosHumano, funcionesHumano,size } from './interfaces';
import { dataHuman } from './data.js';

export class Humano implements funcionesHumano{
    data:atributosHumano[]

    constructor(){
        this.data = dataHuman;
    }

    public consultaBD(id: string | number):atributosHumano | boolean{
        const resultado = this.data.find( x => x.id == id );
        return resultado? resultado : false;
    }

    public registrarBD(atributosHumano:atributosHumano):atributosHumano[]{
        this.data = [... this.data, atributosHumano]
        return this.data;
    }
}

 