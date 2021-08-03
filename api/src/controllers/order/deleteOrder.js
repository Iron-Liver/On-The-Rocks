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

    return res.send(`Order ${orderId} successfully deleted`).status(200);
  } catch (err) {
    return res.send({error: err.message}).status(409);
  }
};
