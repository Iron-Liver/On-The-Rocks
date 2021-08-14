const { Order, Payment_detail } = require("../../db");
const { FRONT } = process.env;

module.exports = async (req, res, next) => {

  try {
    const payment_id = parseInt(req.query.payment_id);
    const payment_status = req.query.status;
    const external_reference = parseInt(req.query.external_reference);
    const merchant_order_id = req.query.merchant_order_id;
  
    let payment = await Payment_detail.findOne({
      where: {
        payment_id 
      }
    });

    if(payment) {
      payment.payment_status = payment_status
      payment.save();
    } else {
      payment = await Payment_detail.create({
        payment_status,
        payment_id,
        merchant_order_id,
        orderId: external_reference,
        name: "mercadopago"
      });
      await payment.setOrder(external_reference);
    }


    if(payment_status === "rejected") {
      await Order.update({
        status: "cancelled"
      },{
        where: {
          id: external_reference
        }
      })
    } else if(payment_status === "approved") {
      await Order.update({
        status: "created"
      },{
        where: {
          id: external_reference
        }
      })
    } else {
      await Order.update({
        status: "processing"
      },{
        where: {
          id: external_reference
        }
      })
    }

    return res.redirect(`${FRONT}/mercadopago/status/${payment_status}`);
  } catch (err) {
    next(err);
    return res.status(404).send(err);
  }
};