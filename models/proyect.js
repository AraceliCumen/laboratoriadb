'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const proyectSchema = schema({
    proyectName: String,
    description: String,
    initialDate: Date,
    finishDate: Date,
    colaborates: Array,
    contactName: String,
    contactEmail: String
});

module.exports = mongoose.model('Proyect', proyectSchema);