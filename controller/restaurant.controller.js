'use strict';

const Restaurant = require('../models/restaurant');

function prueba(request, response) {
  response.status(200).send({
    message: "Probando petición get"
  });
}

function saveRestaurant(request, response) {
  var restaurant = new Restaurant();

  restaurant.name = request.body.name;
  restaurant.menuPrice = request.body.menuPrice;
  restaurant.address = request.body.address;

  restaurant.save((error, restaurantStored) => {
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

function getRestaurants(req, res) {
  Restaurant.find({}, (err, restaurants) => {
    if(err) return res.status(500).send({message: `error al realizar la peticion ${err}`})
    if(!restaurants) return res.status(404).send({message:'No existen peliculas'})
    res.status(200).send({ restaurants }) 
  })
}

module.exports = {
  prueba,
  saveRestaurant,
  getRestaurants
};