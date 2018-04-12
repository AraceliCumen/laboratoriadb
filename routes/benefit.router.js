'use strict';

const express = require('express');
const benefitController = require('../controller/benefit.controller');

const api = express.Router();

api.post('/guardar-benefit', benefitController.saveBenefit);
api.get('/guardar-benefit', benefitController.getBenefit);

module.exports = api;