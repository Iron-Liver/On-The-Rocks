const { Review } = require("../../db");

module.exports = async (req, res, next) => {
    let { productId, userId, stars, description, anonymous } = req.body;
    try {
        if (productId && userId && stars && description) {
            let review = await Review.findOne({ where: { userId, productId } });
            review
                ? review = await Review.update(
                    { ...review, description, anonymous, stars },
                    {
                        where: { userId, productId },
                    }
                )
                : review = await Review.create({productId, userId, stars, description, anonymous});
            
            return res.json({ success: "Review added successfully" });
        } else {
            throw new Error("Insufficient data");
        }
    } catch (err) {
        return res.send({ error: err.message }).status(409);
    }
};
