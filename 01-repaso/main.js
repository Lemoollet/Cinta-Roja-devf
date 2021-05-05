/* let numero = prompt('dame un numero')

const tablaMultiplicar = (num) => {
    for( let i =0; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);

    }
}
tablaMultiplicar(numero); */

/* ------------------------- imprimir los numero pares --------------------------------- */

/* const numPares = () => {
    for( i = 0; i <= 100; i++) {
        if ( i % 2 === 0){
            console.log(`${i} es numero par`)
        } 
    }
}
numPares(); */

/* ---------------------- Revisar si un texto es un palidromo o no ------------------------------------ */

const frase = "ana";
let derecho = "";
let reversa = "";

const palindromo = () => {
  let end = frase.length - 1;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != " ") {
      derecho += frase[i];
    }
    if (frase[end - i] != " ") {
      reversa += frase[end - i];
    }
  }
  if (derecho === reversa) {
    console.log("es un palindromo");
  } else {
    console.log(" no lo es ");
  }
};
palindromo();

/* ---------------------Convertir de grados celcius a farenheit ------------------------------------- */

let grados = prompt(" cunatos grados quieres convertir ? ");

const conversion = () => {
  farenheit = (grados * 9) / 5 + 32;
  console.log(farenheit);
};

conversion();

/* --------------------- Tu peso en otra tierra ------------------------------------- */

let g_tierra = 9.81;
let g_marte = 3.7;
let g_jupiter = 24.8;
let peso = prompt("dame tu peso ");
let numero = parseInt(prompt("elije tu planeta: \n 1 es marte, 2 es jupiter"));
var planeta;

if (numero == 1) {
  peso_final = (peso * g_marte) / g_tierra;
  planeta = "Marte";
} else if (numero == 2) {
  peso_final = (peso * g_jupiter) / g_tierra;
  planeta = "Marte";
} else {
  peso_final = 5;
  planeta = "kripton";
}

document.write("tu peso en " + planeta + " es de " + parseInt(peso_final));
