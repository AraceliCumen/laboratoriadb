'use strict';

const express = require('express');
const eventController = require('../controller/even.controller');

const api = express.Router();

api.post('/guardar-event', eventController.saveEvent);
api.get('/guardar-event', eventController.getEvents)

module.exports = api;