'use strict';

const InternalEvent = require('../models/event');

function saveInternalEvent(request, response) {
  var internalEvent = new InternalEvent();

  internalEvent.eventName = request.body.eventName;
  internalEvent.date = internalEvent.body.date;
  internalEvent.time = request.body.time;
  internalEvent.place = request.body.place;
  internalEvent.address = request.body.address;

  internalEvent.save((error, internalEventStored) => {
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

function getInternalEvent(req, res) {
  InternalEvent.find({}, (err, events) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
    if(!events) return res.status(404).send({message:'No existen eventos'})
    res.status(200).send({ events }) 
  })
}

module.exports = {
  saveInternalEvent,
  getInternalEvent
};