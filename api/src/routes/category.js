const router = require("express").Router();

const addCategory = require("../controllers/category/createCategory");
const readCategory = require("../controllers/category/readCategory")
const updateCategory = require("../controllers/category/updateCategory")
const deleteCategory = require("../controllers/category/deleteCategory")

router.post("/add", addCategory);
router.get('/read/:id', readCategory);
router.get('/read/', readCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;
