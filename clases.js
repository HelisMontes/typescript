class Humano {
    constructor(name, lastname, sex, sentidos) {
        this.nombre = name;
        this.apellido = lastname;
        this.sexo = sex;
        this.sentidos = sentidos;
    }
    get getNombre() {
        return this.nombre;
    }
    get getApellido() {
        return this.apellido;
    }
    get getSexo() {
        return this.sexo;
    }
    get getSentidos() {
        return this.sentidos;
    }
    set setNombre(name) {
        this.nombre = name;
    }
    caminar() {
        return `Si se caminar`;
    }
    consultarBD() {
        const bd = {
            nombre: "Josefina",
            apellido: "Gutierrez",
            sexo: "F",
            sentidos: ["Gusto", "Tacto", "Oido", "Olfato"]
        };
        this.nombre = bd.nombre;
        this.apellido = bd.apellido;
        this.sexo = bd.sexo;
        this.sentidos = bd.sentidos;
    }
}
class Animal extends Humano {
    constructor(tipo, genero, raza, name, lastname, sex, sentidos) {
        super(name, lastname, sex, sentidos);
        this.tipo = tipo;
        this.genero = genero;
        this.raza = raza;
    }
    caminar() {
        return super.caminar();
    }
}
const humano = new Humano("Helis", "Montes", "Masculino", ["Vista", "Gusto", "Tacto", "Oido", "Olfato"]);
console.log(`clase Humano -`, humano);
const perro = new Animal("Perro", "Canis", ["Pastor Aleman", "Lobo siberiano"], "Rog", "", "Macho", ["Gusto", "Tacto", "Oido", "Olfato"]);
console.log(`clase Animal -`, perro);
console.log(perro.caminar());
humano.consultarBD();
console.log(humano.getNombre, humano.getApellido, humano.getSexo, humano.getSentidos);
