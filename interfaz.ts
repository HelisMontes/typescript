interface humano{
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

const hombre: humano = {
    nombre:"Helis",
    apellido:"Montes",
    edad:26,
    sentidos:{
        vista:true,
        gusto:true, 
        oido:true,
        olfato:true,
        tacto:true,
        poder:["Volar","Controlar la mente"]
    }
}
console.log(`Objeto Hombre - `, hombre);

class Men implements humano{
    nombre:string;
    apellido:string;
    edad:number;
    constructor(name:string, lastname:string, edad:number){
        this.nombre = name;
        this.apellido = lastname;
        this.edad = edad;

    }
    consultar(apellido:string):void{
        console.log (`funcion consultar ${this.nombre} ${apellido} `);
    }
}

const men = new Men ("Helis", "Montes", 26);
console.log(`Clase Men`, men);
men.consultar("Montes")

interface HelisMontes{
    (edad:number, tlf:number, email:string, direccion?:string):string
}

const helis: HelisMontes = (edad, tlf, email, direccion) :string => {
    return `${edad} ${tlf} ${email}`
}

console.log(helis(26,12345678,"Helismontes@gmail.com"))