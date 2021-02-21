//Variables
var nombre = "helis";
var apelllido = "montes";
var edad = 26;
var fecha = "01-17-95";
var meses = ["Enero", "Febrero", "Marzo", "Abril"];
var tallas = [7, 7.5, 8.5, 9, 9.5, 10.5];
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
var heroe = function (name, lastName, capitalizar, edad) {
    if (capitalizar === void 0) { capitalizar = false; }
    var otrosParametros = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        otrosParametros[_i - 4] = arguments[_i];
    }
    var capitalizado = function (palabra) {
        return palabra.charAt(0).toLocaleUpperCase() + palabra.substr(1).toLocaleLowerCase();
    };
    if (capitalizar) {
        if (edad) {
            if (otrosParametros.length === 0) {
                return "Mi nombre es " + capitalizado(name) + " " + capitalizado(lastName) + " y tengo " + edad + " a\u00F1os";
            }
            else {
                return "Mi nombre es " + capitalizado(name) + " " + capitalizado(lastName) + ", tengo " + edad + " a\u00F1os " + otrosParametros.join(" ");
            }
        }
        else {
            return "Mi nombre es " + capitalizado(name) + " " + capitalizado(lastName);
        }
    }
    else {
        return "Mi nombre es " + name + " " + lastName;
    }
};
var imprimir = heroe(nombre, apelllido, true, edad);
console.log("Imprimir - " + imprimir);
var imprimir2 = heroe(nombre, apelllido, true, edad, "y me gusta programar", "en typescript");
console.log("Imprimir2 - " + imprimir2);
