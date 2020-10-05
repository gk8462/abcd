/**
 * @description Controller for getting users by role.
 * @author Jithin Zacharia
 */

const userModel = require('../../model/userModel');

/**
 * @exports getUserByRole
 */
exports.getUserByRole = (req, res) => {
    if(!req.params.role) {
        res.status(422).json("User Role is required");
    } else {
        userModel.find({
            role: req.params.role
        }, (err, user) => {
            if(err) {
                res.status(400).json(err);
            } else if(!user.length) {
                res.status(204).json("No users found");
            } else {
                res.status(200).json(user);
            }
        })
    }
}