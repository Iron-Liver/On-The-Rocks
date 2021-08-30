const { Order, Order_products, Product } = require('../../db');
const mercadopago = require('../../utils/mercadopago/configure');
const { BACK, FRONT, WEBHOOK_BACK } = process.env;


module.exports = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    //gets id and cart of current order
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

    //formats the cart for Mercadopago's preference needs
    const items_mp = items.map(item => {
      return {
        title: item.product.name,
        unit_price: item.unitPrice,
        quantity: item.units
      }
    });

    //creates the preference object with all necessary data
    const preference = {
      items: items_mp,
      external_reference: `${id}`,
      payment_methods: {
        installments: 3,
        excluded_payment_methods: [{
          id: "atm"
        }]
      },
      back_urls: {
        success: `${FRONT}/roulette`,
        failure: `${FRONT}/status/mercadopago/failure`,
        pending: `${FRONT}/status/mercadopago/pending`
      },
      auto_return: "all",
      notification_url: `${WEBHOOK_BACK}/mercadopago/webhook?source_news=webhooks`
    }

    //sends a POST request to Mercadopago's API with the preference to be created
    const response = await mercadopago.preferences.create(preference);
    /*
      obtains the unique payment identifier provided by Mercadopago 
      to send to the client to be assigned to the payment step 
    */
    const paymentId = response.body.id;

    await Order.update({
      status: "pending"
    },{
      where: {
        id: parseInt(orderId)
      }
    });

    //sends id back to client
    res.status(200).send({id: paymentId});
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message})
  }
}