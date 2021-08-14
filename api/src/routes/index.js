const router = require('express').Router()
const orderRoutes = require('./order');

router.use('/order', orderRoutes);

const category = require("./category");
const product = require('./product')

router.use("/category", category);
router.use("/product", product);

const user = require("./user")
router.use("/user", user);

const auth = require("./auth")
router.use("/auth", auth)

const mercadopago = require("./mercadopago");
router.use("/mercadopago", mercadopago);

module.exports = router;