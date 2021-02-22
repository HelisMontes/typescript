//Variables
let nombre:string = "helis";
let apelllido:string = "montes";
let edad:number =  26;
let fecha:string = "01-17-95";
let meses:string[] = ["Enero", "Febrero", "Marzo", "Abril"];
let tallas:number[] = [7, 7.5, 8.5, 9, 9.5, 10.5];
let numero:number|string;

numero = 7;
numero = "Siete";

//typeof es para saber el tipo de dato de una variable
console.log(typeof nombre);


/*  FUNCIONES

    En los parametros se puede definir el tipo de dato que va a recibir esa variable, en caso de 
    hacerlo ese parametro pasa hacer obligatorio
    
    El simbolo de ? es para indicar que ese paramentro en opcional y debe ir depues de 
    los parametro obligatorios 

    El parametro por defecto se usa de la siguente manera (variable + tipo de variable = valor)
    capitalizar:boolean = false

    Despues de establecer los parametros se define el tipo de valor que se va a retornar
    
    El parametros RES es para unifcar dentro de un array las otras variables que se reciban

*/  
const heroe = (name:string, lastName:string, capitalizar:boolean = false, edad?:number, ...otrosParametros:string[]) :string => {
    const capitalizado = (palabra:String) :string => {
        return palabra.charAt(0).toLocaleUpperCase() + palabra.substr(1).toLocaleLowerCase();
    } 
    if (capitalizar) {
        if(edad){
            if(otrosParametros.length === 0){
                return `Mi nombre es ${capitalizado(name)} ${capitalizado(lastName)} y tengo ${edad} años`;
            }else{
                return `Mi nombre es ${capitalizado(name)} ${capitalizado(lastName)}, tengo ${edad} años ${otrosParametros.join(" ")}`;
            }
        }else{
            return `Mi nombre es ${capitalizado(name)} ${capitalizado(lastName)}`;
        }
    } else {
        return `Mi nombre es ${name} ${lastName}`;
    }
}

let imprimir:string = heroe(nombre, apelllido, true, edad);
console.log(`Imprimir - ${imprimir}`);

let imprimir2:string = heroe(nombre, apelllido, true, edad, "y me gusta programar", "en typescript");
console.log(`Imprimir2 - ${imprimir2}`);


// OBJETOS
/*

    En los objetos tambien podemos indicar que parametro son olbigatorios y opcional

*/
type Heores = {
    name:string,
    lastName:string,
    edad?:number,
    poderes: string[],
    getNombre?:() => string
}

const OBJBATMAN: Heores = {
    name: "Bruno",
    lastName: "Diaz",
    edad: 24,  
    poderes:["Super detective", "Defenza personal"],
    getNombre(){
        return this.name;    
    }
};

const OBJSUPERMAN:Heores = {
    name: "Clark",
    lastName: "Kent",  
    poderes:["Super detective", "Defenza personal"]
}