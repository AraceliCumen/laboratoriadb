'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const RestaurantSchema = schema({
    name: String,
    menuPrice: String,
    address: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);