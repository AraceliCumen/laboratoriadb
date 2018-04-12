'use strict';

const Event = require('../models/events');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveEvent(request, response) {
  var events = new Event();

  events.eventName = request.body.eventName;
  events.date = request.body.date;
  events.time= request.body.time;
  events.place = request.body.place;
  events.address = request.body.address

  events.save((error, eventStored) => {
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