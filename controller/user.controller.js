'use strict';

const User = require('../models/user');

function saveUser(request, response) {
    var user = new User();

    user.name = request.body.name;
    user.password = request.body.password;


    user.save((error, userStored) => {
        if (error) {
            response.status(400).send({ message: "Error al guardar" });
        } else {
            response.status(200).send({ message: "Se guardo con exito" });
        }
    });
}

module.exports = {
    saveUser
};