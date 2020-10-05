/**
 * @description Controller for approviing providers
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel');

exports.approveProvider = (req, res) => {
    providerModel.find({email:req.body.email}, (err, provider)=> {
        if(err) {
            res.status(400).json(err);
        } else if (!provider.length) {
            res.status(400).json("No user found");
        } else {
            providerModel.findOneAndUpdate({email: req.body.email}, {$set:{approved: req.body.approved}}, (error, user)=> {
                if(err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json("User data upated successfully");
                }
            })
        }
    })
}