const { Coupon } = require("../../db");

const couponMockUp = async () => {
    try {
        await Coupon.create({
            code: "WHEEL2",
            discount: 0.02,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL5",
            discount: 0.05,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL10",
            discount: 0.1,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL15",
            discount: 0.15,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL20",
            discount: 0.2,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL25",
            discount: 0.25,
            global: false,
            userId: 8,
        });
        await Coupon.create({
            code: "WHEEL50",
            discount: 0.50,
            global: false,
            userId: 8,
        });
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    couponMockUp,
};
