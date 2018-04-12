'use strict';

const Event = require('../models/event');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveEvent(request, response) {
  var event = new Event();

  event.eventName = request.body.eventName;
  event.date = request.body.date;
  event.time= request.body.time;
  event.place = request.body.place;
  event.address = request.body.address;

  event.save((error, eventStored) => {
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