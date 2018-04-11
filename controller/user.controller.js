'use strict';

const User = require('../models/user');

function prueba (request, response) {
    response.status(200).send({
        message: "Probando petición get"
    });
}

function saveUser (request, response) {
    var user = new User();

    user.name = request.body.name;
    user.password = request.body.password;

    if (user.name && user.password) {
        user.save( (error, userStored) => {
            if (error) {
                response.status(400).send({message: "Error al guardar"});
            } else {
                response.status(200).send({message: "Se guardo con exito"});
            }
        });
    } else {
        response.status(400).send({message: "Debe llenar los campos"});
    }
}

module.exports = {
    prueba,
    saveUser
};