/**
 * @fileoverview Express router for user authentication routes.
 */
const router = require('express').Router(),
    userRegisterController = require('../controllers/auth/userRegisterController'),
    userLoginController = require('../controllers/auth/userLoginController'),
    userLogoutController = require('../controllers/auth/userLogoutController'),
    providerLoginController = require('../controllers/auth/providerLoginContoller'),
    providerRegisterController = require('../controllers/auth/providerRegisterController'),
    providerLogoutController = require('../controllers/auth/providerLogoutContoller'),
    providerForgotPasswordController = require('../controllers/auth/providerForgotPasswordController'),
    providerResetPasswordController = require('../controllers/auth/providerResetPasswordController'),
    providerUpdateController = require('../controllers/auth/updateProviderProfileController'),
    validatorMiddleware = require('../validator/middleware'),
    registerValidator = require('../validator/userRegister'),
    loginValidator = require('../validator/userLogin'),
    providerRegisterValdator = require('../validator/providerRegisterSchema'),
    providerLoginValidator = require('../validator/providerLoginSchema'),
    providerForgotPasswordSchema = require('../validator/providerForgotPasswordSchema'),
    providerResetPasswordSchema = require('../validator/providerResetPasswordSchema'),
    providerUpdateSchema = require('../validator/updateProviderSchema'),
    JWTCertifier = require('../helpers/JWTCertifier');

router.post('/register', validatorMiddleware(registerValidator),  userRegisterController.userRegister);
router.post('/login', validatorMiddleware(loginValidator) ,userLoginController.userLogin);
router.post('/logout', JWTCertifier.verifyJWT, userLogoutController.userLogout);
router.post('/provider/register', validatorMiddleware(providerRegisterValdator), providerRegisterController.registerPartner);
router.post('/provider/login', validatorMiddleware(providerLoginValidator), providerLoginController.partnerLogin);
router.post('/provider/logout', JWTCertifier.verifyJWT, providerLogoutController.partnerLogout);
router.post('/provider/password/forgot', validatorMiddleware(providerForgotPasswordSchema), providerForgotPasswordController.providerForgotPassword);
router.post('/provider/password/reset', JWTCertifier.verifyJWT, validatorMiddleware(providerResetPasswordSchema), providerResetPasswordController.providerResetPassword);
router.put('provider/update', JWTCertifier.verifyJWT, validatorMiddleware(providerUpdateSchema), providerUpdateController.updateProvider);
module.exports = router;