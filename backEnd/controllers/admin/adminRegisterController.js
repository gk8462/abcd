/**
 * @description Controller for Admin register 
 * @author Jithin Zacharia
 */

const adminModel = require('../../model/adminModel'),
        uniqueIdGenerator = require('../../helpers/generateId'),
        passwordValidator = require('../../helpers/passwordValidations');

exports.adminRegister = (req, res) => {
    adminModel.find({email: req.body.email}, (err, admins)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            if(!admins.length) {
                adminModel.create({
                    adminId: uniqueIdGenerator.generateUniqueId(),
                    name: req.body.name,
                    email: req.body.email,
                    password: passwordValidator.generatePasswordHash(req.body.password),
                    role: 3
                },(error, users)=> {
                    if(error) {
                        res.status(400).json(error);
                    } else {
                        res.status(201).json('Admin Successfully registred');
                    }
                })
            } else {
                res.status(400).json("User already exist");
            }
        }
    })
}