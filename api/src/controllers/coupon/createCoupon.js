const { Coupon } = require("../../db");

module.exports = async (req, res, next) => {
    let coupon = req.body;
    try {
        coupon = await Coupon.create({ ...coupon });
        return res.json({ success: "Coupon successfully created" }).status(200);
    } catch (err) {
        return res.send({ error: err.message }).status(409);
    }
};
