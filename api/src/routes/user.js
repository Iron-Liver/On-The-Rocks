const router = require('express').Router();
const express = require('express');

const getAllUsers = require('../controllers/user/getAllUsers.js')
const createUser = require('../controllers/user/createUser')

router.use(express.json())

router.get('/getAllUsers', getAllUsers);
router.post('/addUser', createUser);

module.exports = router