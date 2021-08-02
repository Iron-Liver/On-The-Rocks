const router = require('express').Router();
const express = require('express');

const getAllUsers = requiere('../controllers/user/getAllUsers.js')

router.use(express.json())

router.get('/getAllUsers', getAllUsers);
router.get('/getUser/:id', getUserById);
router.post('/addUser', createUser);