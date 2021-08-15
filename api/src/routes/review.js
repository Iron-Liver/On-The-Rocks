const router = require("express").Router();

const addReview = require("../controllers/review/createReview");
const readReview = require("../controllers/review/readReview")
const updateReview = require("../controllers/review/updateReview")
const deleteReview = require("../controllers/review/deleteReview")
const getProductReviews = require("../controllers/review/getProductReviews")
const getUserReviews = require("../controllers/review/getUserReviews")

router.post("/add", addReview);
router.get('/read/:id', readReview);
router.put('/update/:id', updateReview);
router.delete('/delete/:id', deleteReview);
router.get('/product/:id', getProductReviews);
router.get('/user/:id', getUserReviews);

module.exports = router;
