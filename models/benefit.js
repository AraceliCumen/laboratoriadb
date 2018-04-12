'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const benefitSchema = schema({
    benefitName: String,
    isCountPercentage: String,
    branch: String,
    address: String
});

module.exports = mongoose.model('Benfit', benefitSchema);