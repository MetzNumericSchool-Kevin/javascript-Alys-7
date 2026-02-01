// Tri simple

// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];

inventaire.sort((potion1,potion2) => {
  return potion1.prix - potion2.prix;
});
console.log(inventaire);
inventaire.forEach(potion => {
  console.log(potion.nom + ": " + potion.prix + "🪙");
});