const { Order, User } = require('../../db');

module.exports = async (req, res, next) => {
  let userOrder = req.body;

  try {
    const user = await User.findOne({
      where: {
        id: userOrder.id
      }
    });
    const orderObj = {
      total: userOrder.total
    };

    const order = await Order.findOrCreate({
      where: {
        userId: userOrder.id
      },
      defaults: orderObj
    });

    user.addOrder(order);
    return res.json(order).status(200);
  } catch (err) {
    return res.send(err.message).status(409);
  }
};
