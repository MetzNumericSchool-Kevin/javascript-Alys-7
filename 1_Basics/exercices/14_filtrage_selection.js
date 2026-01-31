// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

const potions_en_stock = inventaire.filter((potion) => {
  if (potion.stock > 0) {
    return potion;
  }
});
const potions_abordables = inventaire.filter((potion) => {
  if (potion.prix < 40) {
    return potion;
  }
});
console.log(potions_en_stock.length);
console.log(potions_abordables.length);
console.log(potions_en_stock);
console.log(potions_abordables);