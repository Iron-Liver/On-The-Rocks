const { Coupon } = require("../../db");

module.exports = async (req, res, next) => {
    const { userId } = req.params;

    try {
        var coupons = await Coupon.findAll({
            where: { userId },
        });

        const globals = await Coupon.findAll({
            where: { global: true },
        });

        coupons = Array.isArray(globals)
            ? globals.length > 0
                ? coupons.concat(globals)
                : coupons
            : coupons;

        if (!coupons[0]) {
            throw new Error(`User has no coupons`);
        }

        return res.status(200).send(coupons);
    } catch (err) {
        next(err);
        return res.status(409).send({ error: err.message });
    }
};
