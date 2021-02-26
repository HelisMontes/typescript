import {Humano} from './src/Humano.js'

const classHumanos =  new Humano()

const res = classHumanos.registrarBD({
    id:21300,
    name:"Yisus" ,
    lasname:"De Montes",
    dateOfBirth:"01-15-01",
    tlf: 123456789,
    email:"elYisus@example.com",
    address:"Crr 7 # 85-05 dpto 701, Medellin",
    sex:"Undifined",
    size:{
        shirt:"S",
        jeans:28,
        shoes:8.5
    }
});

console.log(res)

console.log("Consulta ",classHumanos.consultaBD(21303))
