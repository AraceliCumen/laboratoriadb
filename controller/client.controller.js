'use strict';

const Client = require('../models/client');

function saveClient(request, response) {
    var client = new Client();

    client.companyName = request.body.companyName;
    client.description = request.body.description;


    client.save((error, clientStored) => {
        if (error) {
            response.status(400).send({ message: "Error al guardar" });
        } else {
            response.status(200).send({ message: "Se guardo con exito" });
        }
    });
}

module.exports = {
    saveclient
};