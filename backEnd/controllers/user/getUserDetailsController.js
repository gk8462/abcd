/**
 * @description Controller for user details controller
 * @author Jithin Zacharia
 */
const userModel = require('../../model/userModel'),
        JWTCertifier = require('../../helpers/JWTCertifier');

exports.getUserDetails = (req, res) => {
    JWTCertifier.getTokenDecoded(req.headers['x-api-key']).then(user=>{
        userModel.find({email: user.email}, (error, docs)=> {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(docs);
            }
        })
    })   
}