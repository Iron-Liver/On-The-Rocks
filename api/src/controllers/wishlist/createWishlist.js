const { Wishlist } = require("../../db");

module.exports = async (req, res, next) => {
    let { userId, productId } = req.body;

    try {
        if (userId && productId) {
            await Wishlist.create({ userId, productId });

            return res.json({ success: "Product added successfully" });
        } else {
            throw new Error("Insufficient data");
        }
    } catch (err) {
        return res.send({ error: err.message }).status(409);
    }
};
