'use strict';

const Event = require('../models/event');

function saveEvent(request, response) {
  var event = new Event();

  event.eventName = request.body.eventName;
  event.date = event.body.date;
  event.time = request.body.time;
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

function getEvent(req, res) {
  Event.find({}, (err, events) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
    if(!events) return res.status(404).send({message:'No existen eventos'})
    res.status(200).send({ events }) 
  })
}

module.exports = {
  saveEvent,
  getEvent
};