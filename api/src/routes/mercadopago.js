const router = require('express').Router();
const mercadopago = require('../controllers/mercadopago/mercadopago');
const getPayment = require('../controllers/mercadopago/getPayment');
const webhook = require('../controllers/mercadopago/webhook');

router.get("/payment/:orderId", getPayment);
router.get("/:orderId", mercadopago);
router.post("/webhook", webhook)

module.exports = router;