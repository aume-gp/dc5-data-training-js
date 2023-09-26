class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }

    calculcirconference() {
        return 2 * Math.PI * this.rayon;
    }
}

let cercle = new Cercle(8);
let circonference = cercle.calculcirconference();
console.log("Circonférence :", circonference);