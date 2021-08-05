const { Order, Order_products, Product } = require('../../db');

module.exports = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findAll({
      where: {
        id: orderId,
      },
      include: [{
        model: Order_products,
        where: {
          orderId: orderId
        },
        include: [Product]
      }]
    });

    if(!order[0]) {
      throw new Error(`Order with id: ${orderId} not found`)
    }

    return res.status(200).send(order[0]);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};