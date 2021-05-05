const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    let salida = {
      name: "Moy",
      edad: 20,
    };
    response.write(JSON.stringify(salida));
  })
  .listen(3000);
console.log("Escuchando en el puerto 3000");
