const { Order } = require("../../db");

module.exports = async (req, res, next) => {
  const { orderId, newStatus } = req.body;
  
  try {
    const [ updated ] = await Order.update({status: newStatus}, { 
      where: {
        id: parseInt(orderId)
      }
    });

    if(!updated) {
      throw new Error(`Order ${orderId} not found / has not been modified`)
    }

    return res.status(200).send(`Order ${orderId} successfully updated`);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};
