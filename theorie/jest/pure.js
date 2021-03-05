function sum(a, b) {
  return a + b;
}

// fonction pure (le plus simple à tester)
// - prédictive : appelée avec les mêmes paramètres elle retourne toujours le même résultat
// ex : sum(1, 2), non prédictive: Math.random(), Date.now()
// - elle n'a pas de side effects : elle n'appelle pas d'autres fonctions
// - elle ne modifie pas ses paramètres

exports.sum = sum;
