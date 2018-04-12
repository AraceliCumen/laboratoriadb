'use strict';

const express = require('express');
const eventController = require('../controller/event.controller');

const api = express.Router();

api.post('/guardar-event', eventController.saveInternalEvent);
api.get('/guardar-event', eventController.getInternalEvent)

module.exports = api;