const { Order, Order_products, Product } = require('../../db');
const mercadopago = require('../../utils/mercadopago/configure');
const { BACK, FRONT, WEBHOOK_BACK } = process.env;


module.exports = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const { id, order_products: items } = await Order.findOne({
      where: {
        id: parseInt(orderId)
      },
      attributes: ["id"],
      include: [{
        model: Order_products,
        attributes: ["units", "unitPrice"],
        include: [{
          model: Product,
          attributes: ["name"]
        }],
      }]
    });

    const items_mp = items.map(item => ({
      title: item.product.name,
      unit_price: item.unitPrice,
      quantity: item.units
    }));

    const preference = {
      items: items_mp,
      external_reference: `${id}`,
      payment_methods: {
        installments: 3
      },
      back_urls: {
        success: `${FRONT}/status/mercadopago/success`,
        failure: `${FRONT}/status/mercadopago/failure`,
        pending: `${FRONT}/status/mercadopago/pending`
      },
      auto_return: "all",
      notification_url: `${WEBHOOK_BACK}/mercadopago/webhook?source_news=webhooks`
    }

    const response = await mercadopago.preferences.create(preference)
    global.id = response.body.id;

    await Order.update({
      status: "pending"
    },{
      where: {
        id: parseInt(orderId)
      }
    });

    res.status(200).send({id: global.id});
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message})
  }
}