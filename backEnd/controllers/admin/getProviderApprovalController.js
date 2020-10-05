/**
 * @description Controller for getting provider approval for users
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel');

exports.getProvidersForApproval = (req, res) => {
    providerModel.find({approved: false}, (err, user)=>{
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(user);
        }
    })
}