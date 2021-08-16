const router = require('express').Router();
const express = require('express');

const getAllUsers = require('../controllers/user/getAllUsers');
const createUser = require('../controllers/user/createUser');
const getUserById = require('../controllers/user/getUserById');
const updateUser = require('../controllers/user/updateUser');
const deleteUser = require('../controllers/user/deleteUser');


router.use(express.json());

router.get('/getAll', getAllUsers);
router.get('/getUser/:id', getUserById)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser);
router.post('/addUser', createUser);

module.exports = router;