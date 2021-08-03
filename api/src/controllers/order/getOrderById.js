const { Order } = require('../../db');

module.exports = async (req, res, next) => {
  const { orderId } = req.body;

  try {
    const order = await Order.findByPk(orderId);

    if(!order) {
      throw new Error(`Order with id: ${orderId} not found`)
    }

    return res.send(order).status(200);
  } catch (err) {
    next(err);
    return res.send({ error: err.message }).status(409);
  }
};