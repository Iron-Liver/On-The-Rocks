const router = require('express').Router();
const createOrder = require('../controllers/order/createOrder.js');
const deleteOrder = require('../controllers/order/deleteOrder.js');
const getAllOrders = require('../controllers/order/getAllOrders.js');
const updateOrderStatus = require('../controllers/order/updateOrderStatus.js');
const getOrdersByUser = require("../controllers/order/getOrdersByUser.js");
const getOrderById = require('../controllers/order/getOrderById.js');

router.get('/getOrdersByUser/:id', getOrdersByUser);
router.post('/deleteOrder', deleteOrder);
router.post('/addOrder', createOrder);
router.post('/updateOrderStatus', updateOrderStatus);
router.post('/getAllOrders', getAllOrders);
router.get('/getOrderById/:orderId', getOrderById);

module.exports = router