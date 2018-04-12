'use strict';

const express = require('express');
const restaurantController = require('../controller/restaurant.controller');

const api = express.Router();

api.post('/guardar-restaurant', restaurantController.saveRestaurant);

module.exports = api;