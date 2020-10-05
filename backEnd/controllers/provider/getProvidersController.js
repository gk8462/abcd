/**
 * @fileoverview Controller for getting all the providers
 * @author Jithin Zacharia
 */

const provideModel = require('../../model/providerModel');

exports.getAllProvider = (req, res) => {
    provideModel.find({approved: true}, (err, providers)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(providers);
        }
    })
}