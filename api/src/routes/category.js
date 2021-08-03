const router = require("express").Router();

const addCategory = require("../controllers/category/createCategory");

router.post("/add", addCategory);

module.exports = router;
