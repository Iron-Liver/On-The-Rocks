const { Order } = require('../../db');

module.exports = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "address",
        "city",
        "total",
        "createdAt",
        "state",
      ],
      order: [["createdAt", "DESC"]]
    });

    if(!orders) {
      return res.send([]).status(200);
    }

    return res.send(orders).status(200);
  } catch (err) {
    next(err);
    return res.send({error: err.message}).status(409);
  }
};