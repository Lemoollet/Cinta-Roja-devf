const animalitos = [
  { nombre: "carlitos", especie: "conejo" }, // 0
  { nombre: "esteban", especie: "perro" }, // 1
  { nombre: "fabiruchis", especie: "tortuga" }, // 2
  { nombre: "anita", especie: "gato" }, // 3
  { nombre: "miranda", especie: "conejo" }, // 4
  { nombre: "lucas", especie: "conejo" }, // 5
  { nombre: "Horacia", especie: "tortuga" }, // 6
];

const newAnimalitos = animalitos.filter(
  (animalito) => animalito.especie === "conejo"
);

console.log(newAnimalitos);
