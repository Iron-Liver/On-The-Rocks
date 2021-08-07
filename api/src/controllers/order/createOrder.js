const { Order, User, Order_products, Product } = require("../../db");

module.exports = async (req, res, next) => {
  const {
    id,
    firstName,
    lastName,
    address,
    city,
    paymentMethod,
    zipCode,
    total,
    status,
    cart
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id,
      },
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
      status
    };

    const order = await Order.create(newOrder);
    
    await user.addOrder(order.id);
    await order.setUser(user.id);

    await cart.forEach(async (product) => {
      const orderProducts = await Order_products.create({
        units: product.units,
        unitPrice: product.price
      });
      orderProducts.setOrder(order.id);
      orderProducts.setProduct(product.id);
    });

    return res.status(201).send(order);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};
