class Humano{
    public nombre:string;
    public apellido:string;
    public sexo:string;
    public sentidos:string[];

    constructor(name:string, lastname:string, sex:string, sentidos:string[]){
        this.nombre = name;
        this.apellido = lastname;
        this.sexo = sex;
        this.sentidos = sentidos;
    }

    get getNombre():string{
        return this.nombre;
    }
    get getApellido():string{
        return this.apellido;
    }
    get getSexo():string{
        return this.sexo;
    }
    get getSentidos():string[]{
        return this.sentidos;
    }
    set setNombre(name:string){
        this.nombre = name;
    }

    protected caminar():string{
        return `Si se caminar`
    }

    public consultarBD():void{
        const bd:{nombre:string, apellido:string, sexo:string, sentidos:string[]} = {
            nombre: "Josefina",
            apellido: "Gutierrez",
            sexo: "F",
            sentidos: ["Gusto", "Tacto", "Oido", "Olfato"]

        }
        
        this.nombre = bd.nombre;
        this.apellido = bd.apellido;
        this.sexo = bd.sexo;
        this.sentidos = bd.sentidos;
    }

}

class Animal extends Humano{
    public tipo:String;
    public genero:String;
    public raza:string[]; 

    constructor(tipo:String, genero:String, raza:string[],name:string, lastname:string, sex:string, sentidos:string[]){
        super(name, lastname, sex, sentidos)
        this.tipo = tipo;
        this.genero = genero;
        this.raza = raza;
    }

    public caminar():string{
        return super.caminar();
    }
}

const humano:Humano = new Humano("Helis", "Montes", "Masculino", ["Vista", "Gusto", "Tacto", "Oido", "Olfato"])
console.log(`clase Humano -`, humano)

const perro:Animal = new Animal("Perro", "Canis", ["Pastor Aleman", "Lobo siberiano"], "Rog", "", "Macho",["Gusto", "Tacto", "Oido", "Olfato"])
console.log(`clase Animal -`, perro)


console.log(perro.caminar());

humano.consultarBD()
console.log(humano.getNombre, humano.getApellido, humano.getSexo, humano.getSentidos)