'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = schema({
    name: String,
    password: String,
    email: String,
    profile: String,
    jobTitle: String,
    description: String,
    projectId: String
});

module.exports = mongoose.model('User', UserSchema);