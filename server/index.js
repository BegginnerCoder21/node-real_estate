require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ConnectDB = require('./config/database');
const router = require('./routes');

//connection à la base donnée
ConnectDB()

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res) =>{
    res.send('Page reussi');
})

app.use(cors())

app.use('/api/auth',router);

//Garantie que l'app écoute les requêtes uniquement 
// lorsque la connexion à la bd sera établie.
mongoose.connection.once('open',() => {
    console.log("Connexion à la bd reussi");
    app.listen(process.env.PORT,() => {
        console.log('Ecoute au port 2100');
    });
});