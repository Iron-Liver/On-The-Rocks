const { Review } = require("../../db");

module.exports = async (req, res, next) => {
    let {productId, userId, stars, description} = req.body;
    console.log(productId, userId, stars, description)
    try {
        if (productId && userId && stars && description) {
            review = await Review.findOrCreate ({
                where: {productId, userId},
                defaults: {productId, userId, stars, description}
            });
            return res.json({ success: 'Review added successfully'})
        } else{
            throw new Error( 'Insufficient data' )
        }
    } catch (err) {
        return res.send({ error: err.message }).status(409);
    }
};
