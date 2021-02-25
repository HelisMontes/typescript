interface atributosHumano {
    id:number | string;
    name:string;
    lasname:string;
    dateOfBirth:string;
    tlf:number;
    email:string;
    address:string;
    sex:string;
    size?:{
        shirt:number | string,
        jeans:number | string,
        shoes:number | string,
    }
}
interface funcionesHumano extends atributosHumano {
    consultaBD(id:number | string):atributosHumano | boolean;
    registrarBD(id: number | string,  name:string, lasname:string, dateOfBirth:string, tlf:number,email:string,address:string,sex:string, size:any):any
}   
    
interface consultaBD{
    ( id: number | string ):string
}
    
interface registrarBD {
    ( id: number | string,  name:string, lasname:string, dateOfBirth:string, tlf:number,email:string,address:string,sex:string, size:any):string
}

export{atributosHumano, funcionesHumano, consultaBD, registrarBD}
