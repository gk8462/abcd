/**
 * @description Controller for getting finanical serives
 * @author Jithin Zacharia
 */

const servicesModel = require('../../model/finanialServiceModel');

exports.getFiancialService = (req, res)=> {
    servicesModel.find({}, (err, service)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(service);
        }
    })
}