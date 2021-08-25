const router = require("express").Router();
const express = require("express");
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/images/products')
    },
    filename: 
    function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.name + '-' + uniqueSuffix)
    }
});

const upload = multer(storage).array('file', 12)

const createProduct = require("../controllers/product/createProduct");
const putProduct = require("../controllers/product/updateProduct");
const deleteProduct = require("../controllers/product/deleteProduct");
const getAllProducts = require("../controllers/product/getProduct");
const getProductById = require("../controllers/product/getProductById");
const productPhotos = require("../controllers/product/productPhotos");

router.use(express.json());
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', createProduct);
router.post('/addPhotos', upload, productPhotos);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct); 

module.exports = router;