'use strict';

const Benefit = require('../models/benefit');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveBenefit(request, response) {
  var benefit = new Benefit();

  benefit.benefitName = request.body.benefitName;
  benefit.isCountPercentage = request.body.isCountPercentage;
  benefit.branch = request.body.branch;
  benefit.address = request.body.address;

  benefit.save((error, benefitStored) => {
    if (error) {
      response.status(400).send({
        message: "Error al guardar"
      });
    } else {
      response.status(200).send({
        message: "Se guardo con exito"
      });
    }
  });
}


module.exports = {
  prueba,
  saveBenefit
};