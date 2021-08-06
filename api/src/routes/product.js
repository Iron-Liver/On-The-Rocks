const router = require("express").Router();
const express = require("express");

const createProduct = require("../controllers/product/createProduct");
//const putProduct = require("../controllers/product/updateProduct");
const deleteProduct = require("../controllers/product/deleteProduct");
const getAllProducts = require("../controllers/product/getProduct");
const getProductById = require("../controllers/product/getProductById");

router.use(express.json());
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', createProduct);
//router.put('/:id', putProduct);
router.delete('/:id', deleteProduct); 

module.exports = router;