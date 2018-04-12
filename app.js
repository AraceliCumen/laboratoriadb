'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//cargar routes
const userRoutes = require('./routes/user.router');
const clientRoutes = require('./routes/client.router');
const proyectRoutes = require('./routes/proyect.router');
const restaurantRoutes = require('./routes/restaurant.router');
const benefitRoutes = require('./routes/benefit.router');
const eventRoutes = require('./routes/event.router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', clientRoutes);
app.use('/api', proyectRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', benefitRoutes);
app.use('/api', eventRoutes);

module.exports = app;