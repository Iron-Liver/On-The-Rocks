const { Payment_detail } = require("../../db");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN_MERCADOPAGO } = process.env;

const mp = new mercadopago(ACCESS_TOKEN_MERCADOPAGO);

module.exports = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const payment = await Payment_detail.findOne({
      where: {
        orderId: parseInt(orderId)
      }
    })

    const response = await mp.get(`/v1/payments/${payment.id}`);

    return res.status(200).send(response);
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message});
  }
};