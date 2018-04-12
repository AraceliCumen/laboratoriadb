'use strict';

const Proyect = require('../models/proyect');

function saveProyect(request, response) {
    var proyect = new Proyect();

    proyect.proyectName = request.body.proyectName;
    proyect.description = request.body.description;
    proyect.initialDate = request.body.initialDate;
    proyect.finishDate = request.body.finishDate;
    proyect.colaborates = request.body.colaborates;
    proyect.contactName = request.body.contactName;
    proyect.contactEmail = request.body.contactEmail


    proyect.save((error, userStored) => {
        if (error) {
            response.status(400).send({ message: "Error al guardar" });
        } else {
            response.status(200).send({ message: "Se guardo con exito" });
        }
    });
}

function getProjects(req, res) {
    Proyect.find({}, (err, proyects) => {
      if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
      if(!proyects) return res.status(404).send({message:'No existen peliculas'})
      res.status(200).send({ proyects }) 
    })
}

module.exports = {
    saveProyect,
    getProjects
};