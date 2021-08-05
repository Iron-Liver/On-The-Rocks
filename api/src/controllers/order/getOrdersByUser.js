const { Order, Order_products, Product } = require('../../db');

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
        "status",
      ],
      where: {
        userId: id,
      },
      include: [{
        model: Order_products,
        attributes: [
          "units", 
          "productId", 
          "createdAt",
          "unitPrice"
        ],
        include: [Product]
      }],
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