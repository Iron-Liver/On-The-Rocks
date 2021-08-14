const router = require('express').Router();
const mercadopago = require('../controllers/mercadopago/mercadopago');
const payment = require('../controllers/mercadopago/payment');
const getPayment = require('../controllers/mercadopago/getPayment');

router.get("/payment/:orderId", getPayment);
router.get("/payment", payment);
router.get("/:orderId", mercadopago);

module.exports = router;