const {
    Order,
    Order_products,
    Product,
    Payment_detail,
    User,
} = require("../../db");

module.exports = async (req, res, next) => {
    const { userId } = req.params;

    try {
        const order = await Order.findAll({
            where: {userId},
            include: [
                {
                    model: Order_products,
                    include: [Product],
                },
                {
                    model: Payment_detail,
                },
                {
                    model: User,
                },
            ],
        });

        console.log(order);

        if (!order[0]) {
            throw new Error(`Order with id: ${orderId} not found`);
        }

        return res.status(200).send(order);
    } catch (err) {
        next(err);
        return res.status(409).send({ error: err.message });
    }
};
