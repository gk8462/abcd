const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema({
    errorId: {
        type: String,
        required: true,
        unique: true
    },
    serviceName: {
        type: String,
        required: true
    },
    errorReason: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

module.exports = mongoose.model('errors', errorSchema);