'use strict';

const express = require('express');
const proyectController = require('../controller/proyect.controller');

const api = express.Router();

api.post('/guardar-proyect', proyectController.saveProyect);
api.get('/proyect', proyectController.getProject);

module.exports = api;