/**
 * @description Controller for user logout
 * @author Jithin Zacharia
 */

const blacklistedModel = require('../../model/blacklistedTokenModel'),
    JWTCertifier = require('../../helpers/JWTCertifier');

/**
 * @exports userLogout
 * @desc This is a protected route
 */

exports.adminLogout = (req, res) => {
    const token = req.headers['x-api-key']
    if (!token) {
        res.status(403).json('API key not provided');
    } else if (JWTCertifier.verifyToken(token) === false) {
        res.status(403).json('Token not valid');
    } else {
        blacklistedModel.create(
            {
                invalidToken: token,
            },
            (err, expire) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json('Successfully logged out.');
                }
            }
        )
    }
}