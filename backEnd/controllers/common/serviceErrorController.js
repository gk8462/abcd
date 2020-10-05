/**
 * @description Controller for adding errors occured during
 * crashes in services.
 * @author Jithin Zacharia
 */

const ErrorModel = require('../../model/errorModel'),
    uniqueId = require('../../helpers/generateId');

exports.registerError = (req, res) => {
    ErrorModel.create({
        errorId: uniqueId.generateUniqueId(),
        serviceName: req.body.serviceName,
        errorReason: req.body.reason
    }, (err, docs) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(201).json('Error successfully registered');
        }
    })
}