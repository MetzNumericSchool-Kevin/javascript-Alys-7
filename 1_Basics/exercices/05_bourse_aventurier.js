// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;

let argent_aventurier = 723;
const quantite_potion = Number.parseInt(prompt("Nombre de potions de soin souhaitées: "))
const prix_total = prix_potion_soin * quantite_potion;

if (argent_aventurier >= prix_total && quantite_potion <= stock_potion_soin) {
    argent_aventurier -= prix_total;
    stock_potion_soin -= quantite_potion;
    console.log(`Vous avez acheté ${quantite_potion} potions de soin à ${prix_potion_soin} 🪙 chacune pour un total de ${prix_total} 🪙.
        Il vous reste ${argent_aventurier} 🪙.
        Il reste ${stock_potion_soin} potions de soin dans la boutique.`);
} else if (argent_aventurier < prix_total) {
    console.log("Vous n'avez pas assez d'argent.");
} else {
    console.log("Il n'y a pas assez de potions disponibles.");
}