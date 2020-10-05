/**
 * @description Contoller for getting counties list
 * @author Jithin Zacharia
 */

const countriesModel = require('../../model/countryModel');

exports.getCountryList = (req, res) => {
    countriesModel.find({}, (err, country)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(country);
        }
    });
}