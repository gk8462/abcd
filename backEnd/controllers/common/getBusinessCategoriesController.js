/**
 * @description Controller for getting types of business 
 * @author Jithin Zacharia
 */

const buisinessModel = require('../../model/businessTypeModel');

exports.getBusinessService = (req, res) => {
    buisinessModel.find({}, (err, buisiness)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(buisiness);
        }
    })
}