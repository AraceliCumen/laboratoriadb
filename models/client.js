'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const clientSchema = schema({
    companyName: String
});

module.exports = mongoose.model('Client', clientSchema);