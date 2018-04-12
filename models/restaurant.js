'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const RestaurantSchema = schema({
    name: String,
    menuPrice: String,
    address: String,
    image: String,
    branchClient : String,
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);