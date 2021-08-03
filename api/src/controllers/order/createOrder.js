const { Order, User } = require("../../db");

module.exports = async (req, res) => {
  const { 
    id, 
    name, 
    address, 
    city, 
    paymentMethod, 
    zipCode, 
    total, 
    status 
  } = req.body;

  try {
    const user = await User.findOne({where: { id }});

    const newOrder = {
      name,
      address,
      city,
      paymentMethod,
      zipCode,
      total,
      status,
    };

    const order = await Order.create(newOrder);

    await user.addOrder(order.id);
    await order.setUser(user.id);

    return res.json(order).status(200);
  } catch (err) {
    return res.send(err.message).status(409);
  }
};
