'use strict';

const Events = require('../models/event');

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

function getEvents(req, res) {
  Events.find({}, (err, events) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
    if(!events) return res.status(404).send({message:'No existen peliculas'})
    res.status(200).send({ events }) 
  })
}

module.exports = {
  prueba,
  saveEvent,
  getEvents
};