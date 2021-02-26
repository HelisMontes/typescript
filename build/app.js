System.register(["./src/Humano.js"], function (exports_1, context_1) {
    "use strict";
    var Humano_js_1, classHumanos, res;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Humano_js_1_1) {
                Humano_js_1 = Humano_js_1_1;
            }
        ],
        execute: function () {
            classHumanos = new Humano_js_1.Humano();
            res = classHumanos.registrarBD({
                id: 21300,
                name: "Yisus",
                lasname: "De Montes",
                dateOfBirth: "01-15-01",
                tlf: 123456789,
                email: "elYisus@example.com",
                address: "Crr 7 # 85-05 dpto 701, Medellin",
                sex: "Undifined",
                size: {
                    shirt: "S",
                    jeans: 28,
                    shoes: 8.5
                }
            });
            console.log(res);
            console.log("Consulta ", classHumanos.consultaBD(21303));
        }
    };
});
