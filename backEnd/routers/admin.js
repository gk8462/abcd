/**
 * @fileoverview Express router for admin routes.
 */
const router = require('express').Router(),
        adminRegisterController = require('../controllers/admin/adminRegisterController'),
        adminLoginController = require('../controllers/admin/adminLoginController'),
        adminLogoutController = require('../controllers/admin/adminLogoutController'),
        JWTCertifier = require('../helpers/JWTCertifier'),
        requestValidator = require('../validator/middleware'),
        adminLoginValidator = require('../validator/adminLoginSchema'),
        providerAppoveController = require('../controllers/admin/approveProviderController'),
        providerApprovalContoller = require('../controllers/admin/getProviderApprovalController'),
        providerApproveSchema = require('../validator/providerApprovalSchema'),
        adminRegisterValidator = require('../validator/adminRegisterSchema');

router.post('/register', requestValidator(adminRegisterValidator), adminRegisterController.adminRegister);
router.post('/login', requestValidator(adminLoginValidator), adminLoginController.adminLogin);
router.post('/logout', JWTCertifier.verifyJWT, adminLogoutController.adminLogout);
router.get('/approval/list', JWTCertifier.verifyJWT, providerApprovalContoller.getProvidersForApproval);
router.post('/approve', requestValidator(providerApproveSchema), JWTCertifier.verifyJWT, providerAppoveController.approveProvider);

module.exports = router;