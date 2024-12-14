//WORKERS
const workers = [];

workers.push({
  id: 0,
  name: "Jair",
  lastname: "Ramirez",
  age: 26,
  workedHours: 48,
  active: true
});

workers.push({
  id: 1,
  name: "Emmanuel",
  lastname: "Marquez",
  age: 21,
  workedHours: 35,
  active: true
});

workers.push({
  id: 2,
  name: "Gabriela",
  lastname: "Alva",
  age: 22,
  workedHours: 40,
  active: true
});

workers.push({
  id: 3,
  name: "Juan",
  lastname: "Arellano",
  age: 20,
  workedHours: 48,
  active: true
});

workers.push({
  id: 4,
  name: "Victor",
  lastname: "Castillo",
  age: 20,
  workedHours: 36,
  active: false
});

workers.push({
  id: 5,
  name: "Moises",
  lastname: "Quintana",
  age: 21,
  workedHours: 40,
  active: true
});

workers.push({
  id: 6,
  name: "Abraham",
  lastname: "Quintana",
  age: 21,
  workedHours: 40,
  active: true
});

workers.push({
  id: 7,
  name: "Rufino",
  lastname: "Botello",
  age: 21,
  workedHours: 36,
  active: false
});

workers.push({
  id: 8,
  name: "Cristopher",
  lastname: "Garcia",
  age: 20,
  workedHours: 48,
  active: false
});

workers.push({
  id: 9,
  name: "Oscar",
  lastname: "Medina",
  age: 21,
  workedHours: 35,
  active: false
});

//CLOTHES
const clothes = [];

clothes.push({
  id: 0,
  brandName: 'Gucci',
  fabric: 'Licra',
  genre: 'Shorts'
});

clothes.push({
  id: 1,
  brandName: 'Praga',
  fabric: 'Piel',
  genre: 'Chamarra'
});

clothes.push({
  id: 2,
  brandName: 'Zahra',
  fabric: 'Mezclilla',
  genre: 'Pantalon'
});

clothes.push({
  id: 3,
  brandName: 'Pucci',
  fabric: 'Algodon',
  genre: 'Camisa'
});

clothes.push({
  id: 4,
  brandName: 'D&G',
  fabric: 'Sintetico',
  genre: 'Pantalon'
});

clothes.push({
  id: 5,
  brandName: 'Dior',
  fabric: 'Algodon',
  genre: 'Camisa'
});

clothes.push({
  id: 6,
  brandName: 'Clothing',
  fabric: 'Seda',
  genre: 'Chal'
});

clothes.push({
  id: 7,
  brandName: 'Zahra',
  fabric: 'Sintetico',
  genre: 'Falda'
});

clothes.push({
  id: 8,
  brandName: 'Westwood',
  fabric: 'Algodon',
  genre: 'Camisa'
});

clothes.push({
  id: 9,
  brandName: 'Versage',
  fabric: 'Sintetico',
  genre: 'Pantalon'
});

module.exports = {
  workers,
  clothes
};
