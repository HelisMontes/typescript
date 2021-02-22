class Avengers {
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear?:boolean = false;
    peleasGanadas?:number = 0;

    constructor(name:string, team:string, nameR:string, puedePelear?:boolean, peleasGanadas?:number){
        this.nombre = name;
        this.equipo = team;
        this.nombreReal = nameR;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}

let atman:Avengers = new Avengers("Atman", "CAP", "Scott Lang", true, 2 );

console.log(atman)