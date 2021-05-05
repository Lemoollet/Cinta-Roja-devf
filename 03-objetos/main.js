let obj = {
  nombre: "Moy",
  edad: 20,
  carac: {
    pelo: "negro",
    estaturaa: [1.8, 1.76, 5.3],
  },
};
//console.log(obj.edad , obj.nombre , obj.carac.estatura[2])

class Perro {
  constructor(nombre, cola, patas, pelaje, nariz, estatura) {
    this.nombre = nombre;
    this.cola = cola;
    this.patas = patas;
    this.nariz = nariz;
    this.pelaje = pelaje;
    this.estatura = estatura;
  }

  moverse() {
    return "estoy brincando";
  }

  habla() {
    return `hola soy un peroo y mi nombre es ${this.nombre}`;
  }

  crecer() {
    this.estatura += 10;
    return `Ahnuma ya creci ${this.estatura}`;
  }
}

const Firulais = new Perro("Firulais", true, 4, "corto", "redonda", 50);

const Pancho = new Perro("Pancho", true, 4, "grande", "largo", 40);

Pancho.crecer();
Pancho.crecer();
console.log(Pancho.estatura);
