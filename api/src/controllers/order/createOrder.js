const { Order, User } = require("../../db");

module.exports = async (req, res) => {
  const { 
    id,
    firstName, 
    lastName, 
    address, 
    city, 
    paymentMethod, 
    zipCode, 
    total, 
    state 
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (!user) { 
      throw new Error(`User with id: ${id} not found`); 
    }

    const newOrder = {
      firstName,
      lastName,
      address,
      city,
      paymentMethod,
      zipCode,
      total,
      state,
    };

    const order = await Order.create(newOrder);

    await user.addOrder(order.id);
    await order.setUser(user.id);

    return res.send(order).status(201);
  } catch (err) {
    return res.send({error: err.message}).status(409);
  }
};
