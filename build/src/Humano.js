System.register(["./data.js"], function (exports_1, context_1) {
    "use strict";
    var data_js_1, Humano;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (data_js_1_1) {
                data_js_1 = data_js_1_1;
            }
        ],
        execute: function () {
            Humano = class Humano {
                constructor() {
                    this.data = data_js_1.dataHuman;
                }
                consultaBD(id) {
                    const resultado = this.data.find(x => x.id == id);
                    return resultado ? resultado : false;
                }
                registrarBD(atributosHumano) {
                    this.data = [...this.data, atributosHumano];
                    return this.data;
                }
            };
            exports_1("Humano", Humano);
        }
    };
});
