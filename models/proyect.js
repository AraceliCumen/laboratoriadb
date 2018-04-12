'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const proyectSchema = schema({
    proyectName: String,
    everisLine: String,
    description: String,
    initialDate: Date,
    finishDate: Date,
    colaborates: Array,
    contactName: String,
    contactEmail: String,
    branch : String
});

module.exports = mongoose.model('Proyect', proyectSchema);