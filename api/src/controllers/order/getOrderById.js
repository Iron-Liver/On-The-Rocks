const { Order } = require('../../db');

module.exports = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByPk(orderId);

    if(!order) {
      throw new Error(`Order with id: ${orderId} not found`)
    }

    return res.status(200).send(order);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};