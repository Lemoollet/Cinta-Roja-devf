/* class Vehiculo {
    constructor(color = 'azul', marca = 'VW', ruedas = 4, tamaño = 'sedan') {
        this.color = color 
        this.marca = marca 
        this.ruedas = ruedas 
        this.tamaño = tamaño
    }

    avanzar () {
        console.log('Estas avanzando')
    }
}

class Automovil extends Vehiculo {

    constructor(color, marca, ruedas, tamaño) {
        super(color, marca, ruedas, tamaño)
    }
}


const carro = new Vehiculo();
console.log(carro);
const moto = new Automovil('negra', 'mercedes', 2, 'pista');
moto.avanzar()
console.log(moto); */

// ------------------------------------------------------------------------ //

/* class Jugador {

    constructor(poder, vida, velocidad) {
        this.poder = poder
        this.vida = vida
        this.velocidad = velocidad
    }

    curar(){
        this.vida += 10 
    }
}

class Jugador2 extends Jugador {
    constructor(poder, vida, velocidad){
        super(poder, vida, velocidad)
    }

    mas_velocidad () {
        this.velocidad += 20 
    }
}

const Moy = new Jugador(50, 100, 30)
console.log(Moy);
Moy.curar()

const Joab = new Jugador2(50, 200, 40)
console.log(Joab);
Joab.curar()
Joab.mas_velocidad()

console.log(`Ahora tu vida es de ${Moy.vida}`);
console.log(`Ahora tu nueva velocidad de ataque es de  ${Joab.velocidad} y tu vida es de ${Joab.vida}`); */

// diferentes tipos de console  (log - info - warning - error)

// ------------------------------------------------------------------------ //

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }

  promedio() {
    let total = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      total += this.calificaciones[i];
    }
    return total / this.calificaciones.length;
  }
}

class Maestro_fisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

class Maestro_musica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}

let Chucho = new Maestro_fisica("Fisica", [0, 9, 6, 4, 5, 4], 80);
let Angel = new Maestro_musica("Musica", [0, 5, 6, 1, 0, 9], 45);

console.log(Chucho.promedio(), Chucho.materia, Chucho.antiguedad);
console.log(Angel.promedio(), Angel.materia, Angel.edad);

// ------------------------------------------------------------------------ //

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
  }

  get_consumoEnergetico() {
    return this.consumoEnergetico;
  }

  set_consumoEnergetico(precio) {
    this.consumoEnergetico = precio;
  }
}

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
  }

  precio_final() {
    /*         this.precio_final = this.carga * this.get_consumoEnergetico()
        console.log(this.consumoEnergetico);
        
        return this.precio_final;  */
    console.log(this.carga);

    return "Total: $" + this.set_consumoEnergetico() * this.carga;
  }
}

let nuevo = new Electrodomestico();
let nuevo2 = new Lavadora(5678, "negro", 4, 7);
console.log(nuevo.set_consumoEnergetico(100));
console.log(nuevo2.precio_final());

/* const lavadora = new Lavadora(7800, 'blanco', 20, 6);
lavadora.setConsumoEnergetico(100);
console.log( lavadora.precioFinal()); */
