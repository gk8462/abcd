/**
 * @fileoverview Mongoose model for country data.
 */

const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dial_code: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('countries', countrySchema);
