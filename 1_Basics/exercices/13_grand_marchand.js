// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

let prix_max = 0;
let stock_max = 0;
let stock_positif = 0;
let potion_prix_max;
let potion_stock_max;
inventaire.forEach(potion => {
  if (potion.prix > prix_max) {
    prix_max = potion.prix;
    potion_prix_max = potion;
  }
  if (potion.stock > stock_max) {
    stock_max = potion.stock;
    potion_stock_max = potion;
  }
  if (potion.stock > 0) {
    stock_positif += 1;
  }
});
console.log(`La potion la plus chère est la ${potion_prix_max.nom}`);
console.log(`La potion le plus en stock est la ${potion_stock_max.nom}`);
console.log(`Le nombre de potions en stock est de ${stock_positif}`);