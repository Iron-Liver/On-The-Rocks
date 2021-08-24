const { Coupon } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Coupon.destroy({
            where: {
                id,
                global: false
            },
        });
        return res.json({ success: "Coupon successfully redeemed" }).status(200);
    } catch (err) {
        next(err);
        return res.json({error: err.message});
    }
};