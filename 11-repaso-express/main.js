const express = require("express");
const bodyParser = require("body-parser");

// Instancia de express con la que configuraremos el servidor
const app = express();

// Configuración para poder recibir el cuerpo de la petición (el body )
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(9999, () => {
  console.log("estoy esuchando en el puerto del diablo al reves ");
});

//graphql
app.get("/", (request, response) => {
  response.send("estoy en casa");
});

app.get("/Home", (request, response) => {
  response.send({ message: "Mensaje en el home" });
});

app.get("/users/:id", (request, response) => {
  console.log(request.params);
  const id = request.params.id;
  response.send({ message: `El id que buscas es: ${id}` });
});

app.get("/search", (request, response) => {
  console.log(request.query);
  const { q, color, vidas } = request.query;
  response.send({ q, color, vidas });
});

app.post("/create/user", (request, response) => {
  console.log(request.body);
  const { name, link, content, img } = request.body;
  response.status(201).send({
    id: "19",
    name,
    link,
    content,
    img,
  });
});

app.patch("/update/user", (request, response) => {
  console.log(request.body);
  const { name, link, content, img } = request.body;
  response.status(201).send({
    id: "19",
    name,
    link,
    content,
    img,
  });
});
