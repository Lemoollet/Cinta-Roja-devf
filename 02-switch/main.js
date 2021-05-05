/* const semaforo = "verde"

switch (semaforo) {
    case 'verde':
        console.log('puede pasar');
    break
    case 'rojo':
        console.log('no puede pasar');
    break
    default:
        console.log('esto no es verde');
    break
} */

/* ---------------------------------------------------------- */

/* const edad = 18
switch(edad) {
    case edad:
        if ( edad < 18 ){
            console.log('es menor de edad');
        }
    break
    default:
        console.log('es mayor de edad');
    break
} */

/* ---------------------------------------------------------- */

/* let lista = [];

let lista1 = [1, "es un string", true, [1,2,3]]

console.log(lista1[3][2]);

lista.push(378,"cadena")
console.log(lista)

for ( let i = 0; i <lista1[3].length; i++){  //i-- para restar 1 
    console.log(lista1[3][i]);

} */

/* ---------------------------------------------------------- */

let tabla = [];
let numero = 2;

for (let i = 0; i <= 10; i++) {
  tabla.push(numero * i);
}

console.log(tabla); //solucion profe

/* let tabla = []

for ( let i = 0; i<= 10; i++) {
    let numero = 2
    numero *= i
    tabla.push(numero)
}
console.log(tabla) */
/* ---------------------------------------------------------- */

const nombreEdad = (name, age) => {
  console.log(`Bienvenido sr(a): ${name} mi edad es de ${age}`);
};

let name2 = "Moy";

/* ---------------------------------------------------------- */

const arreglovacio = () => {
  let nuevoa = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      nuevoa.push(i);
    }
  }
  console.log(nuevoa);
};

/* ---------------------------------------------------------- */

const mayoredad = () => {
  let edad = 18;
  if (edad < 18) {
    console.log(`eres menor de edad, tu edad es de ${edad}`);
  } else {
    console.log(`eres mayor de edad`);
  }
};

/* ---------------------------------------------------------- */

let funcion = prompt("que funcion quieres");

switch (funcion) {
  case "1":
    nombreEdad(name2, 20);
    break;
  case "2":
    arreglovacio();
    break;
  case "3":
    mayoredad();
    break;
  default:
    console.log("khe esta pazando");
    break;
}
