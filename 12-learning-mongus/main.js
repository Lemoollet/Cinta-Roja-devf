const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://Moy1234:Moy1234@firstdb-5axkr.mongodb.net/test?retryWrites=true&w=majority";
const { User } = require("./models/user"); //destructuracion de objetos
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(mongoURL, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("todo chido en mongo...!!");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("<h1> Expresss & Mongo </hi1> ");
});

app.post("/new/user", (request, response) => {
  const params = request.body;
  if (params.email && params.userName && params.password) {
    let newUser = User({
      userName: params.userName,
      email: params.email,
      password: params.password,
    });
    //bcrypt
    newUser.save((err, user) => {
      if (err) {
        response.status(500).json({ message: "Ocurrio un error" });
      } else if (user) {
        response.status(201).send({ data: params });
      }
    });
  } else {
    res.status(400).json({ message: " Peticiones no permitida" });
  }
});

app.post("/login", (req, res) => {
  let params = req.body;
  if (params.email && params.password) {
    User.findOne({ email: params.email }).exec((err, user) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      if (user) {
        if (user.password === params.password) {
          console.log("Encontro usuario", user);
          res.send(user);
        } else {
          res.status(404).send({ message: "Usuario o contraseña incorrectos" });
        }
      } else {
        res.status(404).json({ message: "no se encontro el email" });
      }
    });
  } else {
    res.status(404).json({ message: "no enviaste datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Corriendo en puerto ${PORT}`);
});
