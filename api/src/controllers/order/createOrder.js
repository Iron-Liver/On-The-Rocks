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
    cart
  } = req.body;

  try {
    const user = await User.findByPk(id);

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
      status: "pending"
    };

    const order = await Order.create(newOrder);
    
    await user.addOrder(order.id);
    await order.setUser(user.id);

    cart.forEach(async (product) => {
      const orderProducts = await Order_products.create({
        units: product.units,
        unitPrice: product.price
      });
      await orderProducts.setOrder(order.id);
      await orderProducts.setProduct(product.id);

      // //uncomment when products support stock count 
      // await Product.decrement({
      //   stock: product.units
      // }, {
      //   where: {
      //     id: product.id
      //   }
      // });
    });

    return res.status(201).send({orderId: order.id});
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};
