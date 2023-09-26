function affichernomcomplet(personne) {
    let nomcomplet = personne.prenom + ' ' + personne.nom;
    console.log(nomcomplet);
}

let personne = { prenom: 'oui', nom: 'moi' };
affichernomcomplet(personne);