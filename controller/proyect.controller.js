'use strict';

const Proyect = require('../models/proyect');

function saveProyect(request, response) {
  var proyect = new Proyect();

  proyect.proyectName = params.proyectName;
  proyect.companyName = params.companyName;
  proyect.everisLine = params.everisLine;
  proyect.description = params.description;
  proyect.initialDate = params.initialDate;
  proyect.finishDate = params.finishDate;
  proyect.colaborates = params.colaborates;
  proyect.contactName = params.contactName;
  proyect.contactEmail = params.contactEmail;
  proyect.branch = params.branch;
  proyect.squad1 = params.squad1;
  proyect.methodology = params.methodology;
  proyect.stack = params.stack;
  proyect.organizingTools = params.organizingTools;
  proyect.location = params.location;


  proyect.save((error, userStored) => {
    if (error) {
      response.status(400).send({ message: "Error al guardar" });
    } else {
      response.status(200).send({ message: "Se guardo con exito" });
    }
  });
}

function getProject(req, res) {
  Proyect.find({}, (err, proyects) => {
    if (err) return res.status(500).send({ message: `error al realizar la peticion ${err}` })
    if (!proyects) return res.status(404).send({ message: 'No existen peliculas' })
    res.status(200).send({ proyects })
  })
}



module.exports = {
  saveProyect,
  getProject
};