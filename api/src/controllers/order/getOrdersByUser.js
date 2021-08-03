const { Order } = require('../../db');

module.exports = async (req, res) => {
  const { id } = req.body;

  try {
    const userOrders = await Order.findAll({
      attributes: [
        'id',
        'address',
        'city',
        'total',
        'createdAt',
        'state'
      ],
      where: {
        userId: id
      }
    });
    
    if(!userOrders) {
      return res.send([]).status(200);
    }

    return res.send(userOrders).status(200);
  } catch (err) {
    return res.send({error: err.message}).status(409);
  }
};