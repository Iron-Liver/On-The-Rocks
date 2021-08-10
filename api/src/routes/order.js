const router = require('express').Router();
const createOrder = require('../controllers/order/createOrder.js');
const deleteOrder = require('../controllers/order/deleteOrder.js');
const getOrders = require('../controllers/order/getOrders.js');
const updateOrderStatus = require('../controllers/order/updateOrderStatus.js');
const getOrderById = require('../controllers/order/getOrderById.js');

router.post('/deleteOrder', deleteOrder);
router.post('/addOrder', createOrder);
router.post('/updateOrderStatus', updateOrderStatus);
router.post('/getOrders', getOrders);
router.get('/getOrderById/:orderId', getOrderById);

module.exports = router