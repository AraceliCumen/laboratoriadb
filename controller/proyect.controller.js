'use strict';

const Proyect = require('../models/proyect');

function saveProyect(request, response) {
  var proyect = new Proyect();

  proyect.proyectName = request.body.proyectName;
  proyect.companyName = request.body.companyName;
  proyect.everisLine = request.body.everisLine;
  proyect.description = request.body.description;
  proyect.initialDate = request.body.initialDate;
  proyect.finishDate = request.body.finishDate;
  proyect.colaborates = request.body.colaborates;
  proyect.contactName = request.body.contactName;
  proyect.contactEmail = request.body.contactEmail;
  proyect.branch = request.body.branch;
  proyect.squad1 = request.body.squad1;
  proyect.methodology = request.body.methodology;
  proyect.stack = request.body.stack;
  proyect.organizingTools = request.body.organizingTools;
  proyect.location = request.body.location;


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