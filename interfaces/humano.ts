 namespace Humano{
    export interface humano{
        nombre:string;
        apellido: string;
        edad:number;
        sentidos?:{ vista:boolean, 
            gusto:boolean, 
            oido:boolean, 
            olfato:boolean, 
            tacto:boolean,
            poder?:string[]
        }
        consultar?(nombre:string):void;
    }
}

export {Humano}