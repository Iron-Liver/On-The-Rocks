const router = require('express').Router();
const express = require('express');

const addCoin = require('../controllers/Game/addCoin');
const getCoins = require('../controllers/Game/getCoins');

router.use(express.json());

router.post('/coins/:id', addCoin);
router.get('/getCoins/:id', getCoins);

module.exports = router;