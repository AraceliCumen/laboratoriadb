'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//cargar routes
const userRoutes = require('./routes/user.router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoutes);

module.exports = app;