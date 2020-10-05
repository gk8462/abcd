/**
 * @description Controller for getting users list.
 * @author Jithin Zacharia
 */

const userModel = require('../../model/userModel');

/**
 * @exports getAllUsers
 */
exports.getAllUsers = (req, res) => {
    userModel.find({}, (err, user) => {
        if(err) {
            res.status(400).json(err);
        } else {
            if(!user.length) {
                res.status(204).json("No users found");
            } else {
                res.status(200).json(user);
            }
        }
    })
}