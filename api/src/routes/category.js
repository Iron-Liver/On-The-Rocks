const router = require("express").Router();

const addCategory = require("../controllers/category/createCategory");
const readCategory = require("../controllers/category/readCategory")

router.post("/add", addCategory);
router.get('/read/:id', readCategory);
router.get('/read/', readCategory);

module.exports = router;
