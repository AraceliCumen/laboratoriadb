'use strict';

const Event = require('../models/event');

function saveEvent(request, response) {
    var event = new Event();

    event.eventName = request.body.eventName;
    event.date = request.body.eventDate;
    event.time = request.body.eventTime;
    event.place = request.body.eventPlace;
    event.address = request.body.eventAddress;


    event.save((error, eventStored) => {
        if (error) {
            response.status(400).send({ message: "Error al guardar" });
        } else {
            response.status(200).send({ message: "Se guardo con exito" });
        }
    });
}

module.exports = {
    saveEvent
};