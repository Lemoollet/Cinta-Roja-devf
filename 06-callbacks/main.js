//EJERCICIOS DE CALLBACKS:

//1.- Muestra un mensaje en consola mediante un callback

/* let mensaje = () => {
    console.log('este es mi mensaje con un callback');   
}
let mostrarMensaje = (h) => {
    h();
}
mostrarMensaje(mensaje); */

/* 2.- Crear una función de orden superior que reciba como
    argumento un mensaje y callback. Según el callback que
    se pase como argumento, la función de orden superior
    debe mostrar el mensaje en un console.warn o en un console.log */

let ordenSuperior = (mensaje, callback) => {
  callback(mensaje);
};

let menlog = (mensaje) => {
  console.log(mensaje);
};

let menwarning = (mensaje) => {
  console.log(mensaje);
};

ordenSuperior("esto es un consolo.log", menlog);
ordenSuperior("esto es un consolo.warn", menwarning);
