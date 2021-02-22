"use strict";
class Avengers {
    constructor(name, team, nameR, puedePelear, peleasGanadas) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = name;
        this.equipo = team;
        this.nombreReal = nameR;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
let atman = new Avengers("Atman", "CAP", "Scott Lang", true, 2);
console.log(atman);
