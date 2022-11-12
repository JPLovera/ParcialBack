const express = require('express');
const Router = express.Router();
Router.use(express.urlencoded({extended:false}));
const controller = require('../controllers/personas.controller');

Router.use(express.json());


Router.get('/persona', controller.personas);
Router.get('/uno',controller.personas_id);
Router.post('/alta', controller.personas_alta);

module.exports = Router;
