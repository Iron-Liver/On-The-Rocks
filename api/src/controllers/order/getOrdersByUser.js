const { Order } = require('../../db');

module.exports = async (req, res, next) => {
  const { id } = req.params;

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
      return res.status(200).send([]);
    }

    return res.status(200).send(userOrders);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};