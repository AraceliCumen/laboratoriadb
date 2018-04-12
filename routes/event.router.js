'use strict';

const express = require('express');
const eventController = require('../controller/event.controller');

const api = express.Router();

api.post('/guardar-event', eventController.saveEvent);
api.get('/guardar-event', eventController.getEvent)

module.exports = api;