const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ConnectDB = require('./config/database');
const dotenv = require('dotenv').config();

//connection à la base donnée
ConnectDB()

//Garantie que l'app écoute les requêtes uniquement 
// lorsque la connexion à la bd sera établie.
mongoose.connection.once('open',() => {
    console.log("Connexion à la bd reussi");
    app.listen(process.env.PORT,() => {
        console.log('Ecoute au port 2100');
    });
});