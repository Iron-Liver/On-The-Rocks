const router = require('express').Router()
const category = require("./category");
const product = require('./product')

router.use("/category", category);
router.use("/product", product);



module.exports = router;