const { Coupon } = require("../../db");

const couponMockUp = async () => {
    try {
        await Coupon.create({
            code: "WHEEL2",
            discount: 0.02,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL5",
            discount: 0.05,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL10",
            discount: 0.1,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL15",
            discount: 0.15,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL20",
            discount: 0.2,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL25",
            discount: 0.25,
            global: true,
        });
        await Coupon.create({
            code: "WHEEL50",
            discount: 0.50,
            global: true,
        });
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    couponMockUp,
};
