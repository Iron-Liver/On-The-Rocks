const router = require('express').Router();
const createOrder = require('../controllers/order/createOrder.js');

router.post('/addOrder', createOrder);

module.exports = router