/**
 * @description Controller for updating user details.
 * @author Jithin Zacharia
 */

const userModel = require('../../model/userModel');


exports.updateUser = (req, res) => {
    userModel.find({email: req.body.email}, (err, users)=> {
        if(err) {
            res.status(400).json(err);
        } else if(!users.length) {
            res.status(400).json("User not found. Please register to continue");
        } else {
            userModel.findOneAndUpdate({email: req.body.email}, {$set: {
                email: req.body.email,
                name: req.body.name,
                phone_number: req.body.phone_number,
                country: req.body.country,
                photo: req.body.photo
            }}, (error, newUser) => {
                if(error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json("Profile successfully updated.");
                }
            })
        }
    })
}