/**
 * @description Express router for provider specifc data.
 * @author Jithin Zacharia
 */

const router = require('express').Router();
const  getProviderController = require('../controllers/provider/getProvidersController');
const getProviderDetailsController = require('../controllers/provider/getProviderDetailsController')

router.get('/all', getProviderController.getAllProvider);
router.get('/:partnerId',getProviderDetailsController.getProviderDetails)

module.exports = router;
