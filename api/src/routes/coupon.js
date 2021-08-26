const router = require('express').Router();
const express = require('express');

const createCoupon = require('../controllers/coupon/createCoupon')
const deleteCoupon = require('../controllers/coupon/deleteCoupon')
const getUserCoupons = require('../controllers/coupon/getUserCoupons')
const redeemCoupon = require('../controllers/coupon/redeemCoupon')

router.use(express.json());

router.post('/create', createCoupon);
router.delete('/delete/:id', deleteCoupon);
router.get('/user/:userId',getUserCoupons);
router.delete('/redeem/:id', redeemCoupon);

module.exports = router;