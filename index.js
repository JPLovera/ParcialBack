const express = require('express');
const mysql = require('mysql');
const util = require('util');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');


// servidor
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());

// VARIABLE DE ENTORNO

dotenv.config({path:'./env/.env'});

//rutas

const personas = require('./src/routes/personas.routes');
app.use(personas);


// PUERTO
app.listen(3001,(req,res)=>{
    console.log('server on port 3001');
})
