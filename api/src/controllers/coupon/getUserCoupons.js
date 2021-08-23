const { Coupon } = require("../../db");

module.exports = async (req, res, next) => {
    const { id, userId } = req.params;

    try {
        const coupons = await Coupon.findAll({
            where: { userId },
        });

        coupons = coupons.filter((coupon) => coupon.id === id);

        console.log(coupons);

        if (!coupons[0]) {
            throw new Error(`User has no coupons`);
        }

        return res.status(200).send(coupons);
    } catch (err) {
        next(err);
        return res.status(409).send({ error: err.message });
    }
};
