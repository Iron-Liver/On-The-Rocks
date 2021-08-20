const router = require("express").Router();
const express = require("express");

const createWishlist = require('../controllers/wishlist/createWishlist');
const getWishlist = require('../controllers/wishlist/getWishlist');
const getId = require('../controllers/wishlist/getId');
const deleteWislist= require('../controllers/wishlist/delete');

router.use(express.json());

router.post('/createWishlist', createWishlist);
router.get('/getWishlist', getWishlist)
router.get('/getId', getId)
router.delete('/delete/:id', deleteWislist)

module.exports = router;