System.register([], function (exports_1, context_1) {
    "use strict";
    var Humano, Helis;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Humano = class Humano {
                constructor(id, name, lasname, dateOfBirth, tlf, email, address, sex, size) {
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
                consultaBD(id) {
                    const ARRAYREGISTRO = [{
                            id: 21303,
                            name: "Helis",
                            lasname: "Montes",
                            dateOfBirth: "01-15-00",
                            tlf: 123456789,
                            email: "helism@example.com",
                            address: "Crr 7 # 85-05 dpto 701",
                            sex: "M",
                            size: {
                                shirt: "L",
                                jeans: 32,
                                shoes: 9.5
                            }
                        }, {
                            id: 27994,
                            name: "Ana",
                            lasname: "Mendoza",
                            dateOfBirth: "11-15-01",
                            tlf: 123456789,
                            email: "anamendoza@example.com",
                            address: "Crr 7 # 85-05 dpto 701",
                            sex: "F",
                            size: {
                                shirt: "M",
                                jeans: 10,
                                shoes: 8
                            }
                        }];
                    for (const res of ARRAYREGISTRO) {
                        if (res.id == id) {
                            return res;
                        }
                    }
                    return console.log(`No hay registro asociados con el siguiente ID ${id}. Por favor comunicarse con el administrador de base de datos`);
                }
                registrarBD(id) {
                    return "Por definir";
                }
            };
            Helis = new Humano(123, "Helis", "Montes", "01.01.01", 1234, "helis@gmail.com", "calle 32", "F");
            console.log(Helis.consultaBD(27994));
        }
    };
});
