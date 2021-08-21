const router = require('express').Router();
const mercadopago = require('../controllers/mercadopago/mercadopago');
const payment = require('../controllers/mercadopago/payment');
const getPayment = require('../controllers/mercadopago/getPayment');
const webhook = require('../controllers/mercadopago/webhook');

router.get("/payment/:orderId", getPayment);
router.post("/payment", payment);
router.get("/:orderId", mercadopago);
router.post("/webhook", webhook)

module.exports = router;