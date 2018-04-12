'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const eventSchema = schema({
    eventName: String,
    date: Date,
    time: String,
    place: String,
    address: String
});

module.exports = mongoose.model('Event', eventSchema);