// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("pedidos");

// Ciudades sean San Francisco, Chicago y Puebla
// NO HAY NINGUN ERROR
db.personas.find(
  { ciudad: { $in: ["San Francisco", "Chicago", "Puebla"] } }
);
// NO HAY NINGUN ERROR
// Carros no sean BMW, Lamborghini, Audi y Jaguar
db.personas.find(
  { carro: { $nin: ["BMW", "Lamborghini", "Audi", "Jaguar"] } }
);
// NO HAY NINGUN ERROR
// Edad ≥ 20 o activo sea true
db.personas.find(
  { $or: [ { edad: { $gte: 20 } }, { activo: true } ] }
);
// NO HAY NINGUN ERROR
// No sea menor de edad ni activo falso
db.personas.find(
  { $and: [ { edad: { $gt: 17 } }, { activo: { $ne: false } } ] }
);
// NO HAY NINGUN ERROR
// No sea de la tercera edad
db.personas.find(
  { edad: { $not: { $gt: 60 } } }
);
// NO HAY NINGUN ERROR
// Fecha: 15-11-2023, activo: true
db.personas.find(
  { fecha: "15-11-2023", activo: true }
);
// NO HAY NINGUN ERROR
// Fecha entre 18-11-2023 y 20-11-2023
db.personas.find(
  { fecha: { $gte: "18-11-2023", $lte: "20-11-2023" } }
);