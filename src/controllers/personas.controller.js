const connection = require('../database/db');
const util = require('util');

const utilQuery = util.promisify(connection.query).bind(connection);

controller = {};

controller.personas = async (req,res) =>{
    try{
        const query = 'SELECT * FROM persona';
        const response = await utilQuery(query);
        res.status(200).send({"persona":response});
    }  
    catch(e){
        res.status(404).send({"Error al encontrar": e.message});
    } 
}
controller.personas_id = async (req,res) =>{
    try{
        const query = 'SELECT * FROM persona WHERE id=5';
        const response = await utilQuery(query);
        res.status(200).send({"persona":response});
    }  
    catch(e){
        res.status(404).send({"Error al encontrar": e.message});
    } 
}

controller.personas_alta = async (req,res) =>{
    try{
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const alias = req.body.alias;
        const email = req.body.email;

        const query = 'INSERT INTO persona (nombre,apellido,alias,email) VALUES (?,?,?,?)';
        const response = await utilQuery(query,[nombre,apellido,alias,email]);
        res.status(200).send({"Persona agregada":response})
        }  
        catch(e){
            res.status(404).send({"Error al insertar persona": e.message});
        } 
}

module.exports = controller;