import { atributosHumano, funcionesHumano } from './namespace';

class Humano implements funcionesHumano{
    id;
    name;
    lasname;
    dateOfBirth;
    tlf;
    email;
    address;
    sex;
    size;

    constructor(id: number | string,  name:string, lasname:string, dateOfBirth:string, tlf:number,email:string,address:string,sex:string, size?:any){
       this.id = id;
       this.name = name;
       this.lasname = lasname;
       this.dateOfBirth = dateOfBirth;
       this.tlf = tlf;
       this.email = email;
       this.address = address;
       this.sex = sex;
       this.size = size;
    }

    public consultaBD(id: string | number):atributosHumano | boolean{
        const ARRAYREGISTRO = [{
            id:21303,
            name:"Helis" ,
            lasname:"Montes",
            dateOfBirth:"01-15-00",
            tlf: 123456789,
            email:"helism@example.com",
            address:"Crr 7 # 85-05 dpto 701",
            sex:"M",
            size:{
                shirt:"L",
                jeans:32,
                shoes:9.5
            }
        },{
            id:27994,
            name:"Ana" ,
            lasname:"Mendoza",
            dateOfBirth:"11-15-01",
            tlf: 123456789,
            email:"anamendoza@example.com",
            address:"Crr 7 # 85-05 dpto 701",
            sex:"F",
            size:{
                shirt:"M",
                jeans:10,
                shoes:8
            }
        }]

        for (const res of ARRAYREGISTRO) {
            if(res.id==id){
                return res
            }
        }
        return false;
    }

    public registrarBD(id:number):string{
        return "Por definir"
    }
}

const Helis = new Humano(123, "Helis","Montes","01.01.01",1234,"helis@gmail.com","calle 32","F")

console.log(Helis.consultaBD(27994));

 