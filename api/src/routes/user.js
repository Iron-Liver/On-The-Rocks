const router = require('express').Router();
const express = require('express');
const passport = require("passport");

const getAllUsers = require('../controllers/user/getAllUsers');
const createUser = require('../controllers/user/createUser');
const getUserById = require('../controllers/user/getUserById');
const updateUser = require('../controllers/user/updateUser');
const deleteUser = require('../controllers/user/deleteUser');


router.use(express.json());

router.get('/getAll', passport.authenticate("bearer", { session: false }), getAllUsers);
router.get('/getUser/:id', passport.authenticate("bearer", { session: false }), getUserById)
router.put('/updateUser/:id', passport.authenticate("bearer", { session: false }), updateUser)
router.delete('/deleteUser/:id', passport.authenticate("bearer", { session: false }), deleteUser);
router.post('/addUser', passport.authenticate("bearer", { session: false }), createUser);

module.exports = router;