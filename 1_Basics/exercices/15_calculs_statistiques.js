// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

let valeur_totale = 0;
let prix_total = 0;
let stock_total = 0;
inventaire.forEach(potion => {
  valeur_totale += potion.prix * potion.stock;
  prix_total += potion.prix;
  stock_total += potion.stock;
});
console.log(`La valeur totale de l'inventaire est de ${valeur_totale} 🪙.`)
console.log(`Le prix moyen de l'inventaire est de ${prix_total / 4} 🪙.`)
console.log(`Le stock total de l'inventaire est de ${stock_total} potions.`)