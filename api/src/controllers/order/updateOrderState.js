const { Order } = require("../../db");

module.exports = async (req, res, next) => {
  const { orderId, newState } = req.body;
  
  try {
    const [ updated ] = await Order.update({state: newState}, { 
      where: {
        id: orderId
      }
    });

    if(!updated) {
      throw new Error(`Order ${orderId} not found / has not been modified`)
    }

    return res.send(`Order ${orderId} successfully updated`).status(200);
  } catch (err) {
    next(err);
    return res.send({error: err.message}).status(409);
  }
};
