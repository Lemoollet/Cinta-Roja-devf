const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://Moy1234:Moy1234@firstdb-5axkr.mongodb.net/test?retryWrites=true&w=majority";
const { Pelicula } = require("./models/peliculas"); //destructuracion de objetos (desarmamos un objeto)
const PORT = process.env.PORT || 9999;
const app = express();

mongoose.connect(mongoURL, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("todo chido en mongo...!!");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Andamos chido");
});

app.post("/crear/pelicula", (req, res) => {
  const params = req.body;
  console.log(params);
  const newPeli = Pelicula({
    name: params.name,
    año: params.año,
    duracion: params.duracion,
  });
  newPeli.save((err, peli) => {
    if (err) {
      res.status(404).json({ message: "ocurrio un error" });
    } else if (peli) {
      res.status(201).json({ data: params });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Corriendo en puerto ${PORT}`);
});
