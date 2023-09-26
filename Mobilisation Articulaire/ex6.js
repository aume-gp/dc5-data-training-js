class Rectangle {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    calculsurface() {
        return this.longueur * this.largeur;
    }
}

let rectangle = new Rectangle(12, 36);
let surface = rectangle.calculsurface();
console.log("Surface :", surface);