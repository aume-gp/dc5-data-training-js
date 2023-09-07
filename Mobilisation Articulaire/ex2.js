function sommeTab(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
    return somme;
  }

  let tabNombres = [1, 13, 17, 25, 83];
  let resultat = sommeTab(tabNombres);
  
  console.log(resultat);