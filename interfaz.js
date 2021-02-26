const hombre = {
    nombre: "Helis",
    apellido: "Montes",
    edad: 26,
    sentidos: {
        vista: true,
        gusto: true,
        oido: true,
        olfato: true,
        tacto: true,
        poder: ["Volar", "Controlar la mente"]
    }
};
console.log(`Objeto Hombre - `, hombre);
class Men {
    constructor(name, lastname, edad) {
        this.nombre = name;
        this.apellido = lastname;
        this.edad = edad;
    }
    consultar(apellido) {
        console.log(`funcion consultar ${this.nombre} ${apellido} `);
    }
}
const men = new Men("Helis", "Montes", 26);
console.log(`Clase Men`, men);
men.consultar("Montes");
const helis = (edad, tlf, email, direccion) => {
    return `${edad} ${tlf} ${email}`;
};
console.log(helis(26, 12345678, "Helismontes@gmail.com"));
