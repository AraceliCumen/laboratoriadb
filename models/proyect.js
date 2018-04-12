'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const proyectSchema = schema({
    proyectName: String,
    companyName: String,
    everisLine: String,
    description: String,
    initialDate: Date,
    finishDate: Date,
    colaborates: Array,
    contactName: String,
    contactEmail: String,
    branch : String,
    squad1 : String,
    methodology : String,
    stack: String,
    organizingTools: String
});

module.exports = mongoose.model('Proyect', proyectSchema);