'use strict';

const Benefit = require('../models/benefit');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveBenefit(request, response) {
  var benefit = new Benefit();

  benefit.benefitName = request.body.benefitName;
  benefit.disCountPercentage = request.body.disCountPercentage;
  benefit.branch = request.body.branch;
  benefit.address = request.body.address;

  benefit.save((error, benefitStored) => {
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

function getBenefit(req, res) {
  Benefit.find({}, (err, benefits) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
    if(!benefits) return res.status(404).send({message:'No existen eventos'})
    res.status(200).send({ benefits }) 
  })
}


module.exports = {
  prueba,
  saveBenefit,
  getBenefit
};