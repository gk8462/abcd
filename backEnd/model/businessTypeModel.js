/**
 * @fileoverview Mongoose model for business types
 */

const mongoose = require('mongoose');

const businessTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('businesstypes', businessTypeSchema);
