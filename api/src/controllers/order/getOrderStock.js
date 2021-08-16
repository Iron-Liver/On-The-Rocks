const { Order, Product, Order_products } = require('../../db');
const { Op } = require('sequelize');

module.exports = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOne({
      where: {
        id: orderId
      },
      include: Order_products
    });

    if(!order) {
      throw new Error(`Order with id: ${orderId} not found`);
    }

    const orderUnits = order.order_products.map(product => ({
      id: product.productId,
      units: product.units
    }));

    const products = await Product.findAll({
      where: {
        id: {
          [Op.in]: orderUnits.map(product => product.id)
        }
      }
    });

    const stock = products.reduce((acc, el) => 
      orderUnits.find(({ id }) => id === el.id).units > el.stock 
        ? false
        : acc
    , true)

    res.status(200).send({stock})
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message});
  } 
};