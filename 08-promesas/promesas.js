const request = require("request");

const newPost = (title, cuerpo, userId) => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const json = JSON.stringify({
    title,
    cuerpo,
    userId,
  });

  var options = {
    body: json,
    headers: {
      "Content-type": "application/json; charset=UTF=8",
    },
  };
  return new Promise((resolve, reject) => {
    request.post(URL, options, (err, res, body) => {
      if (res.statusCode === 201) {
        const aa = JSON.parse(body);
        resolve(aa);
      } else {
        reject(res.statusCode);
      }
    });
  });
};

newPost("este es un post", "este es el body de mi post", 1)
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(`Este es el error ${error}`));

/*
----------------------------------------------------------------
    Escribe el código del CRUD de la siguiente API genérica:
        https://goodreads-devf-aaron.herokuapp.com/docs/ 

    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa. 
----------------------------------------------------------------
*/

const url_base = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";

const newAuthor = (nombre, nacionalidad, biografía, genero, edad) => {
  const uri = "authorse/";
  const url_final = url_base + url_final;

  const jsonSend = {
    name: nombre,
    nationality: nacionalidad,
    biography: biografía,
    gender: genero,
    age: edad,
  };
};
