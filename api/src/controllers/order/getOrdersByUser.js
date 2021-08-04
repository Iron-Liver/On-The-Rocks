const { Order } = require('../../db');

module.exports = async (req, res, next) => {
  const { id } = req.body;

  try {
    const userOrders = await Order.findAll({
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
      where: {
        userId: id,
      },
      order: [["createdAt", "DESC"]]
    });
    
    if(!userOrders) {
      return res.send([]).status(200);
    }

    return res.send(userOrders).status(200);
  } catch (err) {
    next(err);
    return res.send({error: err.message}).status(409);
  }
};