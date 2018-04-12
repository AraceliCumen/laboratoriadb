'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//cargar routes
const userRoutes = require('./routes/user.router');
const clientRoutes = require('./routes/client.router');
const proyectRoutes = require('./routes/proyect.router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/api', userRoutes);
app.use('/api', clientRoutes);
app.use('/api', proyectRoutes);

module.exports = app;