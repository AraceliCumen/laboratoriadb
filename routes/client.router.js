'use strict';

const express = require('express');
const clientController = require('../controller/client.controller');

const api = express.Router();

api.post('/guardar-cliente', clientController.saveClient);

module.exports = api;