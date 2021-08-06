const router = require('express').Router();
const express = require('express');

const getAllUsers = require('../controllers/user/getAllUsers.js')
const createUser = require('../controllers/user/createUser.js')


router.use(express.json());

router.get('/getAll', getAllUsers);

router.post('/addUser', createUser);

module.exports = router;