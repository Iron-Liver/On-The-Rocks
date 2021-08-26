const router = require('express').Router();
const getDashboard = require('../controllers/dashboard/getDashboard');

router.get('/', getDashboard);

module.exports = router;