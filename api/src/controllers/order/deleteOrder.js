const { Order } = require("../../db");

module.exports = async (req, res, next) => {
  const { orderId } = req.body;

  try {
    const deleted = await Order.destroy({
      where: {
        id: orderId
      }
    });

    if(!deleted) {
      throw new Error(`Order with id: ${orderId} not found`);
    }

    return res.status(200).send(`Order ${orderId} successfully deleted`);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};
