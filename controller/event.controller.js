'use strict';

const Event = require('../models/event');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveEvent(request, response) {
  var event = new Event();

  event.benefitName = request.body.benefitName;
  event.isCountPercentage = request.body.isCountPercentage;
  event.branch = request.body.branch;
  event.address = request.body.address;

  event.save((error, benefitStored) => {
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
  saveEvent
};