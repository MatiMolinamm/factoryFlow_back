// Required modules
const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const app = express();
const methodOverride = require("method-override"); //para poder utilizar PUT Y DELETE

// Required routers
const factory = require("./routes/factory");

// Config

app.use(express.json()); //para que funcione el metodo post en formularios
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false })); // para que tome los datos de post

// Base de datos
dbConnection();

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

//Routes

//app.use('/api/auth', require('./routes/auth') );
app.use("/api/production", factory);
app.use("/", (req, res) => {
  res.send(`factoryFlow corriendo en puerto ${process.env.PORT}`);
});

app.listen(process.env.PORT, () =>
  console.log(`factoryFlow corriendo en puerto ${process.env.PORT}`)
);
