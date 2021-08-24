const { Coupon } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        const coupon = await Coupon.findOne({
            where: { id },
        });

        if (!coupon) {
            throw new Error("Coulnd't find that coupon");
        }

        await Coupon.destroy({
            where: {
                id
            },
        });

        return res.json({ success: "Coupon successfully deleted" }).status(200);
    } catch (err) {
        next(err);
        return res.json({ error: err.message });
    }
};
