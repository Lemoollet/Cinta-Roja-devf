const express = require("express");

const app = express();
const PORT = 3000; // puertos que se usan para desarrollo 3000 8080

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  console.log("Hola en express");
  response.status(200).send("<h1> Bienvenido a Express </h1>");
});

app.listen(PORT, () => {
  console.log(`Corriendo en puerto ${PORT}`);
});
