// Mini-simulation d'achat

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;

// Affichage stock disponible
let choix_numero = 1;
console.log("Potions disponibles:")
inventaire.forEach(potion => {
  console.log(`- Choix ${choix_numero}: ${potion.stock} ${potion.nom} à ${potion.prix}🪙 chacune`);
  choix_numero += 1;
});

// Choix potion
const choix_potion = Number.parseInt(prompt("Quelle potion souhaitez-vous acheter?"));

// Choix nombre
const nombre_potion = Number.parseInt(prompt("Combien de potions voulez-vous acheter?"));

// Vérification
if (choix_potion >= choix_numero || choix_potion <= 0) {
  console.log("Le numéro de la potion saisi ne correspond à aucune potion de l'inventaire.");
} else {
  const potion_choisie = inventaire[choix_potion - 1];
  if (nombre_potion > potion_choisie.stock) {
    console.log("Il n'y a pas assez de potions dans l'inventaire.");
  } else {
    const prix_total = nombre_potion * potion_choisie.prix;
    if (bourse_aventurier < prix_total) {
      console.log("Vous n'avez pas assez d'argent.");
    } else {
      bourse_aventurier -= prix_total;
      potion_choisie.stock -= nombre_potion;
      console.log(`Vous avez acheté ${nombre_potion} ${potion_choisie.nom} pour un total de ${prix_total}🪙. Il vous reste ${bourse_aventurier}🪙.`);
    }
  }
}