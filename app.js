'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//cargar routes
const userRoutes = require('./routes/user.router');
const proyectRoutes = require('./routes/proyect.router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', proyectRoutes);

module.exports = app;