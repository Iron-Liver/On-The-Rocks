const { Payment_detail } = require("../../db");
const mercadopago = require("../../utils/mercadopago/configure");

module.exports = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const payment = await Payment_detail.findOne({
      where: {
        orderId: parseInt(orderId)
      }
    })

    const response = await mercadopago.get(`/v1/payments/${payment.id}`);

    return res.status(200).send(response);
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message});
  }
};