const router = require('express').Router()

const orderRoutes = require('./order');
router.use('/order', orderRoutes);

const category = require("./category");
router.use("/category", category);

const product = require('./product')
router.use("/product", product);

const user = require("./user")
router.use("/user", user);

const review = require("./review")
router.use("/review", review);

const auth = require("./auth")
router.use("/auth", auth)

const mercadopago = require("./mercadopago");
router.use("/mercadopago", mercadopago);

const game = require("./game");
router.use('/game',game)

const wishlist = require("./wishlist");
router.use("/wishlist", wishlist);

const coupon = require("./coupon");
router.use("/coupon", coupon);

module.exports = router;