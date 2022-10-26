// requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

//inicializamos nuestra app express
const express = require("express");

//comenzamos a escuchar con nuestro servidor
const app = express();

//creamos nuestro primer get
app.get("/home", (req, res)=> {
    res.send("Mi primer servidor");
})

//exportamos nuestra app para aplicarla como modulo
app.listen(
    process.env.PORT, () => {
        console.log("Server listening on port " + process.env.PORT)
    }
);

module.exports = app;