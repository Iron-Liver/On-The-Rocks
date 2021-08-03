const router = require('express').Router()
const orderRoutes = require('./order');

router.use('/order', orderRoutes);

const category = require("./category");

router.use("/category", category);

module.exports = router;