const request = require("request"); //de esta forma imoprto los modulos, librerias etc para peticiones
const url = "https://jsonplaceholder.typicode.com";

request(`${url}/users`, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  console.log(JSON.parse(body)); // para converti el body a formato JSON
});

request(`${url}/post`, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
});

//--------------------------------------------------------------------------------------------------------------//
//------------------------------------------------API de Star wars---------------------------------------------//

const request = require("request");
const url = "https://swapi.co/api/";

request(`${url}people/1/`, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
});

request(`${url}planets/3/`, (error, response, body) => {
  const json = JSON.parse(body); //convierto el boy en un json y lo guardo en una variable
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
  console.log("este es el body", body);
  console.log("este es el json", json);
  console.log(json.name);
  console.log(JSON.stringify(json.name)); //convierte un objeto o valor de JavaScript en una cadena de texto JSON, puedes cambiar el valor si tu se lo especificas (boolean, string. etc...)
});

request.get(`${url}people/1/`, (error, response, body) => {
  const json = JSON.parse(body);
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", json);
});

//en este ejemplo creamos una funcion donde metemos nuestra peticion para que en la funcion podamos meter nosotros los atributos
const getSomething = (path, id) => {
  request.get(`${url}${path}/${id}/`, (error, response, body) => {
    const json = JSON.parse(body);
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
  });
};
getSomething("people", "1");

//--------------------------------------------------------------------------------------------------------------//
//------------------------------------------------API de Pokemon---------------------------------------------//

const request = require("request");
const url = "https://pokeapi.co/api/v2/";

const getPokemon = (path, id) => {
  request.get(`${url}${path}/${id}/`, (error, response, body) => {
    const json = JSON.parse(body);
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log(json.types[0].type);
  });
};

getPokemon("pokemon", "ditto");

const request = require("request");
const url = "https://pokeapi.co/api/v22/";

const getPokemon = (path, id) => {
  request.get(`${url}${path}/${id}/`, (error, response, body) => {
    response.statusCode == 200
      ? console.log(
          `Types: ` + JSON.parse(body).types.map((type) => type.type.name)
        )
      : console.log(error);
  });
};
getPokemon("pokemon", "pikachu");

/*
--------------------------------------------------------------------------------------------------------------
2.- Hacer una funcion que haga una peticion 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    
        http://openlibrary.org/search.json?q=i+robot) 
--------------------------------------------------------------------------------------------------------------
*/

const request = require("request");
const url = "http://openlibrary.org/search.json?q=i+robot";

const peticionLibroTitulo = (titulo) => {
  request.get(url, (error, response, body) => {
    response.statusCode === 200
      ? `Authors: ` +
        JSON.parse(body).docs.map((doc) =>
          doc.author_name.map((author_name) => console.log(author_name))
        )
      : console.log(error);
  });
};
peticionLibroTitulo("por quien doblan las capanas");

/*
--------------------------------------------------------------------------------------------------------------
3.- Hacer una petición por autor y devolver la lista de 
    sus libros
        http://openlibrary.org/search.json?author=asimov
--------------------------------------------------------------------------------------------------------------
*/

const url = "http://openlibrary.org/search.json?author=asimov";

const peticionLibro = (autor) => {
  request.get(url, (error, response, boy) => {
    response.statusCode === 200
      ? console.log(
          `Sus libros son:` +
            JSON.parse(body).docs.map((doc) => doc.tiitle_suggest)
        )
      : console.log(error);
  });
};

peticionLibro("lovecraft");

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  array[i].name;
}
// 1
// 2
// 3
// 4
// 5

const array2 = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Juana" },
  { id: 3, name: "Jose" },
  { id: 4, name: "Julian" },
];
array.map((element) => {
  element.name;
});

// 1
// 2
// 3
// 4
// 5

var x = 1;
var y = "";
if (x === 1) {
  y = "Es uno";
} else {
  y = "Es diferente de uno";
}

var y = x === 1 ? "Es uno" : "Es diferente de uno";
