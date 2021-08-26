const router = require("express").Router();
const express = require("express");
const multer  = require('multer')

const storage = multer.diskStorage({
   
    destination: function (req, file, cb) {
        cb(null, '../client/public/img')
    },
    filename: 
    function (req, file, cb) {
        const {sku} = req.query;
        const {name} = req.params;
        console.log("aca",name, sku)
        cb(null, sku + '-' + Date.now() + ".jpg")
    }
});


const upload = multer({storage:storage}).array('file', 12)

const createProduct = require("../controllers/product/createProduct");
const putProduct = require("../controllers/product/updateProduct");
const deleteProduct = require("../controllers/product/deleteProduct");
const getAllProducts = require("../controllers/product/getProduct");
const getProductById = require("../controllers/product/getProductById");
const productPhotos = require("../controllers/product/productPhotos");

router.use(express.json());
router.post('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', createProduct);
router.post('/addPhotos/:name', upload, productPhotos);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct); 


module.exports = router;