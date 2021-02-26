type size = {
    shirt:number | string,
    jeans:number | string,
    shoes:number | string,
}

interface atributosHumano {
    id:number | string;
    name:string;
    lasname:string;
    dateOfBirth:string;
    tlf:number;
    email:string;
    address:string;
    sex:string;
    size?:size
}

interface funcionesHumano {
    consultaBD(id:number | string):atributosHumano | boolean;
    registrarBD(atributosHumano:atributosHumano):atributosHumano[];
}   

export{atributosHumano, funcionesHumano, size}
