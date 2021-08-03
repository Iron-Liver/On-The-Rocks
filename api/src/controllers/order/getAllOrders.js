const { Order } = require('../../db');

module.exports = async (req, res) => {
  try {
    const orders = await Order.findAll();

    if(!orders) {
      return res.send([]).status(200);
    }

    return res.send(orders).status(200);
  } catch (err) {
    res.send({error: err.message}).status(409);
  }
};